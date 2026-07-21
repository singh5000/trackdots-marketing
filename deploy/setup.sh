#!/bin/bash
# One-time server setup for trackdots-marketing on a fresh Ubuntu VPS (Hostinger).
# Usage: bash deploy/setup.sh yourdomain.com
set -e

DOMAIN="${1:?Usage: bash deploy/setup.sh yourdomain.com}"
APP_DIR="$(cd "$(dirname "$0")/.." && pwd)"

echo "==> Installing Node.js 22, nginx, certbot..."
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs nginx certbot python3-certbot-nginx
sudo npm install -g pm2

echo "==> Checking .env.local..."
if [ ! -f "$APP_DIR/.env.local" ]; then
  cat > "$APP_DIR/.env.local" <<EOF
WP_API_URL=
NEXT_PUBLIC_WP_SITE_URL=
NEXT_PUBLIC_SITE_URL=https://$DOMAIN
WP_APP_USER=
WP_APP_PASSWORD=
EOF
  echo "!! .env.local created with empty values."
  echo "!! Fill it in (nano $APP_DIR/.env.local) then re-run this script."
  exit 1
fi

echo "==> Building app..."
cd "$APP_DIR"
npm ci
npm run build

echo "==> Starting app with PM2 on port 3000..."
pm2 delete trackdots 2>/dev/null || true
pm2 start npm --name trackdots -- start
pm2 save
sudo env PATH=$PATH pm2 startup systemd -u "$USER" --hp "$HOME" | tail -1 | sudo bash || true

echo "==> Configuring nginx for $DOMAIN..."
sudo sed "s/DOMAIN_PLACEHOLDER/$DOMAIN/g" "$APP_DIR/deploy/nginx.conf" \
  | sudo tee /etc/nginx/sites-available/trackdots > /dev/null
sudo ln -sf /etc/nginx/sites-available/trackdots /etc/nginx/sites-enabled/trackdots
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx

echo "==> Getting SSL certificate..."
sudo certbot --nginx -d "$DOMAIN" -d "www.$DOMAIN" --redirect || \
  echo "!! Certbot failed — make sure DNS A record for $DOMAIN points to this server, then run: sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN --redirect"

echo ""
echo "==> Done. Site should be live at https://$DOMAIN"
echo "    Update later with: bash deploy/update.sh"
