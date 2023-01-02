import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Hero from '@/containers/Hero';
import FavoriteDevices from '@/containers/FavoriteDevices';
import OriginalContent from '@/containers/OriginalContent';
import Faqs from '@/containers/Faqs';
import { useSession } from '@/src/lib/next-auth-react-query';
import { useIsomorphicLayoutEffect } from '@/src/hooks/useIsomorphicLayout';

export default function Home() {
  const [status, loading] = useSession({
    required: false,
    redirectTo: `${process.env.NEXTAUTH_URL}`,
  });

  const { push } = useRouter();
  console.log(status);
  console.log(loading);
  const renderResults = () => {
    if (status) {
      console.log(status);
      push('/browse');
    } else if (!status && !loading) {
      return (
        <>
          <Hero />
          <FavoriteDevices />
          <OriginalContent />
          <Faqs />
        </>
      );
    } else
      return (
        <div
          style={{
            width: '100%',
            height: '100vh',
            backgroundColor: 'rgba(20, 20, 20, 1)',
          }}
        />
      );
  };

  return (
    <main>
      {/* <Hero />
      <FavoriteDevices />
      <OriginalContent />
      <Faqs /> */}
      {renderResults()}
    </main>
  );
}
