import '../styles/base/global.scss';
import { Bebas_Neue } from '@next/font/google';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';

const bebas_neue = Bebas_Neue({ weight: '400', subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={bebas_neue.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
