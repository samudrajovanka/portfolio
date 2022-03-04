import About from '@components/parts/About';
import Hero from '@components/parts/Hero';
import ProfessionalExperience from '@components/parts/ProfessionalExperiences';
import DesignPortfolio from '@components/parts/DesignPortfolio';
import Projects from '@components/parts/Projects';
import { useRef } from 'react';
import ConnectWithMe from '@components/parts/ConnectWithMe';
import SeoPage from '@components/elements/SeoPage';
import fetchAPI from '@lib/fetchApi';

export default function HomePage({ dribbbleShots, socialMedias, projects, experiences, email }) {
  const refProfessionalExperience = useRef(null);

  return (
    <>
      <SeoPage />
      <Hero refProfessionalExperience={refProfessionalExperience} socialMedia={socialMedias} />
      <About email={email} />
      <ProfessionalExperience data={experiences} refProfessionalExperience={refProfessionalExperience} />
      <DesignPortfolio data={dribbbleShots} />
      <Projects data={projects} />
      <ConnectWithMe data={socialMedias} />
    </>
  );
}

export async function getServerSideProps() {
  const response = await Promise.all([
    await fetch('https://api.dribbble.com/v2/user/shots?per_page=6', {
      headers: {
        Authorization: `Bearer ${process.env.DRIBBBLE_ACCESS_TOKEN}`,
      },
    }),
    await fetchAPI('/api/social-medias'),
    await fetchAPI('/api/projects'),
    await fetchAPI('/api/experiences'),
  ]);

  const dribbbleShotsData = await response[0].json();

  const email = response[1].data.socialMedias.filter((item) => item.icon === 'email')[0];

  return {
    props: {
      dribbbleShots: dribbbleShotsData,
      socialMedias: response[1].data.socialMedias,
      projects: response[2].data.projects,
      experiences: response[3].data.experiences,
      email: email?.url ?? 'mailto:samudrajovanka20@gmail.com',
    },
  };
}
