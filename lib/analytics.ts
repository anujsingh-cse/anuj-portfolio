import { track } from '@vercel/analytics';

export function trackEvent(eventName: string, data?: Record<string, string | number | boolean | null>) {
  try {
    if (process.env.NODE_ENV === 'production') {
      track(eventName, data);
    } else {
      console.log(`[Analytics Track]: ${eventName}`, data || '');
    }
  } catch (error) {
    console.error('Failed to track event:', error);
  }
}
