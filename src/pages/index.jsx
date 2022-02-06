import About from '@components/parts/About';
import Hero from '@components/parts/Hero';
import ProfessionalExperience from '@components/parts/ProfessionalExperience';
import DesignPortfolio from '@components/parts/DesignPortfolio';
import { useRef } from 'react';
import axios from 'axios';

import socialMedia from '../json/social-media.json';
import professionalExperiences from '../json/professional-experiences.json';

export default function Home({ dribbbleShots }) {
  const refProfessionalExperience = useRef(null);

  return (
    <>
      <Hero refProfessionalExperience={refProfessionalExperience} socialMedia={socialMedia} />
      <About />
      <ProfessionalExperience data={professionalExperiences} refProfessionalExperience={refProfessionalExperience} />
      <DesignPortfolio data={dribbbleShots} />
    </>
  );
}

export async function getServerSideProps() {
  const dribbbleShots = await axios('https://api.dribbble.com/v2/user/shots?per_page=6', {
    headers: {
      Authorization: `Bearer ${process.env.DRIBBBLE_ACCESS_TOKEN}`,
    },
  });

  return {
    props: {
      dribbbleShots: dribbbleShots.data,
    },
  };
}
