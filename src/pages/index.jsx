import About from '@components/parts/About';
import Hero from '@components/parts/Hero';
import Experiences from '@components/parts/Experiences';
import DesignPortfolio from '@components/parts/DesignPortfolio';
import Projects from '@components/parts/Projects';
import { useRef } from 'react';
import ConnectWithMe from '@components/parts/ConnectWithMe';
import SeoPage from '@components/elements/SeoPage';
import config from 'src/config';

export default function HomePage({ dribbbleShots, socialMedias, experiences, projects, emailUrl }) {
  const refExperience = useRef(null);

  return (
    <>
      <SeoPage />
      <Hero refExperience={refExperience} socialMedia={socialMedias} />
      <About emailUrl={emailUrl} />
      <Experiences data={experiences} refExperience={refExperience} />
      <DesignPortfolio data={dribbbleShots} />
      <Projects data={projects} />
      <ConnectWithMe data={socialMedias} />
    </>
  );
}

export async function getStaticProps() {
  const responseData = await Promise.all([
    fetch('https://api.dribbble.com/v2/user/shots?per_page=6', {
      headers: {
        Authorization: `Bearer ${process.env.DRIBBBLE_ACCESS_TOKEN}`,
      },
    }).then((res) => res.json()),
    fetch(`${config.apiUrl}/api/social-medias`).then((res) => res.json()),
    fetch(`${config.apiUrl}/api/experiences`).then((res) => res.json()),
    fetch(`${config.apiUrl}/api/projects`).then((res) => res.json()),
  ]);

  return {
    props: {
      dribbbleShots: responseData[0],
      socialMedias: responseData[1].data.socialMedias,
      experiences: responseData[2].data.experiences,
      projects: responseData[3].data.projects,
      emailUrl: responseData[1].data.socialMedias.find((item) => item.icon === 'email').url,
    },
    revalidate: config.revalidateAt,
  };
}
