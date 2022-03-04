import SeoPage from '@components/elements/SeoPage';
import ProjectAdminCreate from '@components/parts/ProjectAdmin/ProjectAdminCreate';
import { getSession } from 'next-auth/react';

export default function ProjectsAdminCreatePage() {
  return (
    <>
      <SeoPage
        title="Project Create | Jovanka Samudra"
        description="Create project admin page to create new data project used on the page"
        url={`${process.env.HOST}/admin/projects/create`}
      />
      <ProjectAdminCreate />
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

  return {
    props: {},
  };
}
