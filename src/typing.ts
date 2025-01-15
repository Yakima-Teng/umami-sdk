export interface DefaultTrackProps {
  // Hostname of server
  hostname: string;
  // Browser language
  language: string;
  // Page referrer
  referrer: string;
  // Screen dimensions (eg. 1920x1080)
  screen: string;
  // Page title
  title: string;
  // Page url
  url: string;
  // Website ID (required)
  website: string;
}

export type TrackPayloadCallback = (props: DefaultTrackProps) => Record<string, unknown>;
