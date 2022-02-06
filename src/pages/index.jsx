import About from '@components/parts/About';
import Hero from '@components/parts/Hero';
import ProfessionalExperience from '@components/parts/ProfessionalExperience';
import { useRef } from 'react';

import socialMedia from '../json/social-media.json';
import professionalExperiences from '../json/professional-experiences.json';

export default function Home() {
  const refProfessionalExperience = useRef(null);

  return (
    <>
      <Hero refProfessionalExperience={refProfessionalExperience} socialMedia={socialMedia} />
      <About />
      <ProfessionalExperience data={professionalExperiences} refProfessionalExperience={refProfessionalExperience} />
    </>
  );
}
