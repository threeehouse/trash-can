import type { AppProps } from 'next/app';

import { GlobalStyle, Navigation } from '../components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GlobalStyle />
      <Component {...pageProps} />
      <Navigation />
    </div>
  );
}
