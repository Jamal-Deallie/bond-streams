import { Bebas_Neue, Roboto } from '@next/font/google';
import { SessionProvider } from 'next-auth/react';
import Layout from '@/components/Layout';
import cn from 'classnames';
import type { AppProps } from 'next/app';
import type { Session } from 'next-auth';
import '../styles/base/global.scss';
// import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../lib/graphqlRequestClient';

const bebas_neue = Bebas_Neue({ weight: '400', subsets: ['latin'] });
const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <QueryClientProvider client={queryClient}>
        <main className={cn(bebas_neue.className, roboto.className)}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </QueryClientProvider>
    </SessionProvider>
  );
}
