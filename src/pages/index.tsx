import { useRouter } from 'next/router';
import { useLayoutEffect } from 'react';

export default function () {
  const router = useRouter();
  useLayoutEffect(() => {
    router.replace('/home', window.location.href);
  }, [router]);
  return null;
}
