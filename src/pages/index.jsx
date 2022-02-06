import About from '@components/parts/About';
import Hero from '@components/parts/Hero';
import ProfessionalExperience from '@components/parts/ProfessionalExperience';

import socialMedia from '../json/social-media.json';
import professionalExperiences from '../json/professional-experiences.json';

export default function Home() {
  return (
    <>
      <Hero socialMedia={socialMedia} />
      <About />
      <ProfessionalExperience data={professionalExperiences} />
    </>
  );
}
