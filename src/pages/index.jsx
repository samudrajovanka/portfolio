import About from '@components/parts/About';
import Hero from '@components/parts/Hero';
import Experiences from '@components/parts/Experiences';
import DesignPortfolio from '@components/parts/DesignPortfolio';
import Projects from '@components/parts/Projects';
import { useRef } from 'react';
import ConnectWithMe from '@components/parts/ConnectWithMe';
import SeoPage from '@components/elements/SeoPage';

import socialMedia from '@data/socialMedia';
import projects from '@data/projects';
import experiences from '@data/experiences';

export default function HomePage({ dribbbleShots }) {
  const refExperience = useRef(null);

  return (
    <>
      <SeoPage />
      <Hero refExperience={refExperience} socialMedia={socialMedia} />
      <About />
      <Experiences data={experiences} refExperience={refExperience} />
      <DesignPortfolio data={dribbbleShots} />
      <Projects data={projects} />
      <ConnectWithMe data={socialMedia} />
    </>
  );
}

export async function getStaticProps() {
  const responseDribbble = await fetch('https://api.dribbble.com/v2/user/shots?per_page=6', {
    headers: {
      Authorization: `Bearer ${process.env.DRIBBBLE_ACCESS_TOKEN}`,
    },
  });

  const dribbbleShotsData = await responseDribbble.json();

  return {
    props: {
      dribbbleShots: dribbbleShotsData,
    },
    revalidate: 1,
  };
}
