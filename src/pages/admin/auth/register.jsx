import SeoPage from '@components/elements/SeoPage';
import FormRegister from '@components/parts/Form/FormRegister';
import fetchAPI from '@lib/fetchApi';
import { getSession } from 'next-auth/react';

export default function RegisterAdminPage() {
  return (
    <>
      <SeoPage
        title="Admin Register"
        description="Register page for create new admin"
        url={`${process.env.HOST}/admin/auth/register`}
      />
      <FormRegister />
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: '/admin',
        permanent: false,
      },
    };
  }

  const { length: usersLength } = (await fetchAPI('/api/users')).data;

  if (usersLength > 0) {
    return {
      redirect: {
        destination: '/admin/auth/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      name: 'Admin',
    },
  };
}
