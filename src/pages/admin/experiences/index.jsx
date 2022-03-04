import SeoPage from '@components/elements/SeoPage';
import ExperienceAdminView from '@components/parts/ExperienceAdmin/ExperienceAdminView';
import fetchAPI from '@lib/fetchApi';
import { getSession } from 'next-auth/react';

export default function ProjectsAdminPage({ experiences }) {
  return (
    <>
      <SeoPage
        title="Experiences | Jovanka Samudra"
        description="Experiences admin page to manage data experiences used on the page"
        url={`${process.env.HOST}/admin/social-medias`}
      />

      <ExperienceAdminView data={experiences} />
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/admin/auth/login',
        permanent: false,
      },
    };
  }

  const experiencesResponse = await fetchAPI('/api/experiences');

  return {
    props: {
      experiences: experiencesResponse.data.experiences,
    },
  };
}
