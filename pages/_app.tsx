import type { AppProps } from 'next/app';
import { getCLS, getFID, getLCP } from 'web-vitals';
import usePageView from 'hooks/usePageView';

import '../styles/globals.scss';

function sendToGoogleAnalytics({ name, delta, value, id }: any) {
  // Assumes the global `gtag()` function exists, see:
  // https://developers.google.com/analytics/devguides/collection/ga4
  gtag('event', name, {
    // Built-in params:
    value: delta, // Use `delta` so the value can be summed.
    // Custom params:
    metric_id: id, // Needed to aggregate events.
    metric_value: value, // Optional.
    metric_delta: delta, // Optional.
  });
}

export default function MyApp({ Component, pageProps }: AppProps) {
  /** Core Web Vitals */
  getCLS(sendToGoogleAnalytics);
  getFID(sendToGoogleAnalytics);
  getLCP(sendToGoogleAnalytics);

  usePageView();

  return <Component {...pageProps} />;
}
