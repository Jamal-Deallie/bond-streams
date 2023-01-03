import { useSession } from '@/src/lib/next-auth-react-query';
import Feature from '@/components/Feature';
import MainView from '@/containers/MainView';
import UAParser from 'ua-parser-js';
import AccessDenied from '@/components/AccessDenied';

interface BrowseProps {
  deviceType?: string;
}

const Browse = ({ deviceType }: BrowseProps) => {
  return (
    <main>
      <Feature />
      <MainView deviceType={deviceType} />
    </main>
  );
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
