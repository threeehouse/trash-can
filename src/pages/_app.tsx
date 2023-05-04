import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { GlobalStyle, Navigation } from '../components';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div style={{ position: 'relative' }}>
      <GlobalStyle />
      <AnimatePresence mode="popLayout" initial={false}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
      <Navigation />
    </div>
  );
}
