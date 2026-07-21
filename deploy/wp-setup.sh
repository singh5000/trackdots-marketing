#!/bin/bash
# Install WordPress (nginx + PHP-FPM + MariaDB) for the CMS backend on Ubuntu.
# Usage: bash deploy/wp-setup.sh cms.trackdots.net
set -e

DOMAIN="${1:?Usage: bash deploy/wp-setup.sh cms.trackdots.net}"
WP_DIR="/var/www/cms"
DB_NAME="wordpress"
DB_USER="wpuser"
DB_PASS="$(openssl rand -base64 18 | tr -d '/+=')"

echo "==> Installing nginx, PHP-FPM, MariaDB..."
sudo apt-get update
sudo apt-get install -y nginx mariadb-server unzip \
  php-fpm php-mysql php-curl php-gd php-xml php-mbstring php-zip php-imagick php-intl certbot python3-certbot-nginx

PHP_SOCK="$(ls /run/php/php*-fpm.sock | head -1)"
echo "==> PHP-FPM socket: $PHP_SOCK"

echo "==> Creating database..."
sudo mysql <<EOF
CREATE DATABASE IF NOT EXISTS $DB_NAME DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER IF NOT EXISTS '$DB_USER'@'localhost' IDENTIFIED BY '$DB_PASS';
GRANT ALL PRIVILEGES ON $DB_NAME.* TO '$DB_USER'@'localhost';
FLUSH PRIVILEGES;
EOF

echo "==> Downloading WordPress..."
sudo mkdir -p "$WP_DIR"
curl -sL https://wordpress.org/latest.tar.gz | sudo tar xz -C "$WP_DIR" --strip-components=1
sudo chown -R www-data:www-data "$WP_DIR"

echo "==> Configuring nginx for $DOMAIN..."
sudo tee /etc/nginx/sites-available/cms > /dev/null <<EOF
server {
    listen 80;
    server_name $DOMAIN;
    root $WP_DIR;
    index index.php;
    client_max_body_size 128M;

    location / {
        try_files \$uri \$uri/ /index.php?\$args;
    }
    location ~ \.php\$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:$PHP_SOCK;
    }
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff2?)\$ {
        expires 30d;
        access_log off;
    }
}
EOF
sudo ln -sf /etc/nginx/sites-available/cms /etc/nginx/sites-enabled/cms
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx

echo "==> Getting SSL certificate..."
sudo certbot --nginx -d "$DOMAIN" --redirect --non-interactive --agree-tos -m admin@trackdots.net || \
  echo "!! Certbot failed — check DNS, then run: sudo certbot --nginx -d $DOMAIN --redirect"

echo ""
echo "=============================================="
echo "  WordPress installer is ready!"
echo "  Open:  https://$DOMAIN"
echo ""
echo "  DB details for the installer screen:"
echo "    Database Name: $DB_NAME"
echo "    Username:      $DB_USER"
echo "    Password:      $DB_PASS"
echo "    Host:          localhost"
echo "=============================================="
echo "  ^^ SAVE THIS PASSWORD SOMEWHERE SAFE"
