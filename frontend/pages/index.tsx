import Hero from '@/containers/Hero';
import FavoriteDevices from '@/containers/FavoriteDevices';
import OriginalContent from '@/containers/OriginalContent';
import Faqs from '@/containers/Faqs';


export default function Home() {
  return (
    <main>
      <Hero />
      <FavoriteDevices />
      <OriginalContent />
      <Faqs />
    </main>
  );
}
