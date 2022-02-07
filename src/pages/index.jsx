import About from '@components/parts/About';
import Hero from '@components/parts/Hero';
import ProfessionalExperience from '@components/parts/ProfessionalExperiences';
import DesignPortfolio from '@components/parts/DesignPortfolio';
import Projects from '@components/parts/Projects';
import { useRef } from 'react';
import axios from 'axios';

import socialMedia from '../json/social-media.json';
import professionalExperiences from '../json/professional-experiences.json';
import projects from '../json/projects.json';

export default function Home({ dribbbleShots }) {
  const refProfessionalExperience = useRef(null);

  return (
    <>
      <Hero refProfessionalExperience={refProfessionalExperience} socialMedia={socialMedia} />
      <About />
      <ProfessionalExperience data={professionalExperiences} refProfessionalExperience={refProfessionalExperience} />
      <DesignPortfolio data={dribbbleShots} />
      <Projects data={projects} />
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
