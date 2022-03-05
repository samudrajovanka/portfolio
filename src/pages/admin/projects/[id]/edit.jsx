import SeoPage from '@components/elements/SeoPage';
import ProjectAdminEdit from '@components/parts/ProjectAdmin/ProjectAdminEdit';
import fetchAPI from '@lib/fetchApi';
import { getSession } from 'next-auth/react';

export default function ProjectsAdminEditPage({ project }) {
  return (
    <>
      <SeoPage
        title="Project Edit | Jovanka Samudra"
        description="Edit project admin page to edit data project used on the page"
        url={`${process.env.HOST}/admin/projects/${project._id}/edit`}
      />
      <ProjectAdminEdit initialData={project} />
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

  const { id } = context.query;
  const { cookie } = context.req.headers;

  const projectResponse = await fetchAPI(`/api/projects/${id}`, { headers: { cookie } });

  if (!projectResponse.success) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project: projectResponse.data.project,
    },
  };
}
