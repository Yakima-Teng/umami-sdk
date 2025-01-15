import { TrackPayloadCallback } from '@/typing';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const win = globalThis as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const umami = win.umami as any;

export const trackPayload = (payload?: Record<string, unknown> | TrackPayloadCallback): void => {
  try {
    const { track } = umami || {};
    if (!track) {
      return;
    }
    track(payload);
  } catch (err: unknown) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
};

export const trackEvent = (eventName: string, eventData?: Record<string, unknown>): void => {
  try {
    const { track } = umami || {};
    if (!track) {
      return;
    }
    track(eventName, eventData);
  } catch (err: unknown) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
};

export const identifySession = (sessionData: Record<string, unknown>): void => {
  try {
    const { identify } = umami || {};
    if (!identify) {
      return;
    }
    identify(sessionData);
  } catch (err: unknown) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
};

export default {
  trackPayload,
  trackEvent,
  identifySession,
};
