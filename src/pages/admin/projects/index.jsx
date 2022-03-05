import SeoPage from '@components/elements/SeoPage';
import ProjectAdminView from '@components/parts/ProjectAdmin/ProjectAdminView';
import fetchAPI from '@lib/fetchApi';
import { getSession } from 'next-auth/react';

export default function ProjectsAdminPage({ projects }) {
  return (
    <>
      <SeoPage
        title="Projects | Jovanka Samudra"
        description="Projects admin page to manage data projects used on the page"
        url={`${process.env.HOST}/admin/social-medias`}
      />

      <ProjectAdminView data={projects} />
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

  const projectsResponse = await fetchAPI('/api/projects');

  return {
    props: {
      projects: projectsResponse.data.projects,
    },
  };
}
