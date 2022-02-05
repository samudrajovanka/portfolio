import Hero from '@components/parts/Hero';

import socialMedia from '../json/social-media.json';

export default function Home() {
  return <Hero socialMedia={socialMedia} />;
}
