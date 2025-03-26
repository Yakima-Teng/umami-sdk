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

// 采用 AOP 的方式来封装一个高阶函数，避免手动到处在函数里添加 doTrackEvent 代码来实现优雅的埋点
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const aopTrackEvent = <T extends (...args: any[]) => any>(
  eventName: string,
  fn: T,
  eventData?: Record<string, unknown>,
) => {
  return ((...args: Parameters<T>) => {
    trackEvent(eventName, eventData);
    return fn(...args);
  }) as T;
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
  aopTrackEvent,
  identifySession,
};
