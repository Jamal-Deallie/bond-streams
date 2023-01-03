import { Bebas_Neue, Roboto } from '@next/font/google';
import Layout from '@/components/Layout';
import cn from 'classnames';
import type { AppProps } from 'next/app';
import type { Session } from 'next-auth';
import '@/styles/base/global.scss';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  QueryClientProvider,
  Hydrate,
  DehydratedState,
} from '@tanstack/react-query';
import { queryClient } from '@/src/lib/queries';
import PrivateRoute from '@/src/helpers/routeProtection';
const bebas_neue = Bebas_Neue({ weight: '400', subsets: ['latin'] });
const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session; dehydratedState: DehydratedState }>) {
  const protectedRoutes = ['/browse', '/search'];

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ReactQueryDevtools initialIsOpen={false} />
        <div className={cn(bebas_neue.className, roboto.className)}>
          <Layout>
            <PrivateRoute protectedRoutes={protectedRoutes}>
              <Component {...pageProps} />
            </PrivateRoute>
          </Layout>
        </div>
      </Hydrate>
    </QueryClientProvider>
  );
}
