import type { AppProps } from 'next/app';

import { Navigation } from '../components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
      <Navigation />
    </div>
  );
}
