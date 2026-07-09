const WP_SITE_URL = process.env.NEXT_PUBLIC_WP_SITE_URL ?? "https://wp-be.trackdots.net";

/** Shared stock photo, hosted in the WP media library so it can be swapped from wp-admin without a code change. */
export const TEAM_MEETING_IMAGE = `${WP_SITE_URL}/wp-content/uploads/2026/07/team-meeting.jpg`;
