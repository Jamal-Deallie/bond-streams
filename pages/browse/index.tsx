import { useSession } from 'next-auth/react';
import Feature from '@/components/Feature';
import MainView from '@/containers/MainView';
import UAParser from 'ua-parser-js';
import AccessDenied from '@/components/AccessDenied';


interface BrowseProps {
  deviceType?: string;
}

const Browse = ({ deviceType }: BrowseProps) => {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  if (!session && !loading) {
    return <AccessDenied />;
  } else if (!session?.user && loading) {
    return (
      <div
        style={{
          width: '100%',
          height: '100vh',
          backgroundColor: 'rgba(20, 20, 20, 1)',
        }}
      />
    );
  } else if (session?.user) {
    return (
      <main>
        <Feature />
        <MainView deviceType={deviceType} />
      </main>
    );
  }
};

export default Browse;

Browse.getInitialProps = ({ req }: any) => {
  let userAgent;
  if (req) {
    userAgent = req.headers['user-agent'];
  } else {
    userAgent = navigator.userAgent;
  }
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || 'desktop';
  return { deviceType };
};
