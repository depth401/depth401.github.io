import type { AppProps } from 'next/app';
import usePageView from 'hooks/usePageView';

import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  usePageView();
  return <Component {...pageProps} />;
}
