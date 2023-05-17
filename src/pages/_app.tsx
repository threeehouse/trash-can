import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { GlobalStyle, Navigation, ThreeBackground } from '../components';
import { OverlayProvider } from '../utils';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div style={{ position: 'relative' }}>
      <GlobalStyle />
      <OverlayProvider>
        <AnimatePresence mode="wait" initial={false}>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
        <Navigation />
        <ThreeBackground />
      </OverlayProvider>
    </div>
  );
}
