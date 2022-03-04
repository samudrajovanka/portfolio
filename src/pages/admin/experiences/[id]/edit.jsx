import SeoPage from '@components/elements/SeoPage';
import ExperienceAdminEdit from '@components/parts/ExperienceAdmin/ExperienceAdminEdit';
import fetchAPI from '@lib/fetchApi';
import { getSession } from 'next-auth/react';

export default function ExperiencesEditPage({ experience }) {
  return (
    <>
      <SeoPage
        title="Experience Edit | Jovanka Samudra"
        description="Edit experience admin page to edit data experience used on the page"
        url={`${process.env.HOST}/admin/experiences/${experience._id}/edit`}
      />
      <ExperienceAdminEdit initialData={experience} />
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

  const expResponse = await fetchAPI(`/api/experiences/${id}`, { headers: { cookie } });

  if (!expResponse.success) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      experience: expResponse.data.experience,
    },
  };
}
