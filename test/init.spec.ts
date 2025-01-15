import { trackPayload, trackEvent, identifySession } from '@/index';

describe('src/index.ts', () => {
  it('trackPayload should work', () => {
    expect(typeof trackPayload).toStrictEqual('function');

    const result = trackPayload();
    expect(typeof result).toStrictEqual('undefined');
  });

  it('trackEvent should work', () => {
    expect(typeof trackEvent).toStrictEqual('function');

    const result = trackEvent('eventName', {});
    expect(typeof result).toStrictEqual('undefined');
  });

  it('identifySession should work', () => {
    expect(typeof identifySession).toStrictEqual('function');

    const result = identifySession({});
    expect(typeof result).toStrictEqual('undefined');
  });
});
