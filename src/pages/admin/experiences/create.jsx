import SeoPage from '@components/elements/SeoPage';
import ExperienceAdminCreate from '@components/parts/ExperienceAdmin/ExperienceAdminCreate';
import { getSession } from 'next-auth/react';

export default function ExperiencesAdminCreatePage() {
  return (
    <>
      <SeoPage
        title="Experience Create | Jovanka Samudra"
        description="Create experiences admin page to create new data experiences used on the page"
        url={`${process.env.HOST}/admin/experiences/create`}
      />
      <ExperienceAdminCreate />
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
