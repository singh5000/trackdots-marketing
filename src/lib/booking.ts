const WP_SITE_URL = process.env.NEXT_PUBLIC_WP_SITE_URL ?? "https://cms.trackdots.net";

export async function fetchAvailability(date: string): Promise<string[]> {
  try {
    const res = await fetch(`${WP_SITE_URL}/wp-json/trackdots/v1/availability?date=${encodeURIComponent(date)}`);
    const json = await res.json();
    return json.slots ?? [];
  } catch {
    return [];
  }
}

export type BookingPayload = {
  name: string;
  email: string;
  company: string;
  message?: string;
  date: string;
  time: string;
};

export type BookingResult = { success: boolean; slot?: string; error?: string };

export async function submitBooking(payload: BookingPayload): Promise<BookingResult> {
  try {
    const res = await fetch(`${WP_SITE_URL}/wp-json/trackdots/v1/book`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return await res.json();
  } catch {
    return { success: false, error: "network_error" };
  }
}
