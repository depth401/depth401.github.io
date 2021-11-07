import App from 'next/app';
import TagManager from 'react-gtm-module';
import { existsGtmId, GTM_ID } from 'lib/gtm';

import '../styles/globals.scss';

export default class MyApp extends App {
  componentDidMount() {
    if (existsGtmId) {
      TagManager.initialize({ gtmId: GTM_ID });
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}
