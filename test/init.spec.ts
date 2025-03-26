import { trackPayload, trackEvent, aopTrackEvent, identifySession } from '@/index';

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

  it('aopTrackEvent should work', () => {
    expect(typeof aopTrackEvent).toStrictEqual('function');

    const add = (a: number, b: number) => a + b;
    const args = [1, 2];
    const result = aopTrackEvent('eventName', add, {})(args[0], args[1]);
    const originalResult = add(args[0], args[1]);
    expect(result).toStrictEqual(originalResult);
  });

  it('identifySession should work', () => {
    expect(typeof identifySession).toStrictEqual('function');

    const result = identifySession({});
    expect(typeof result).toStrictEqual('undefined');
  });
});
