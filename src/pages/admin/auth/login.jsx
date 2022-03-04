import SeoPage from '@components/elements/SeoPage';
import FormLogin from '@components/parts/Form/FormLogin';
import fetchAPI from '@lib/fetchApi';
import { getSession } from 'next-auth/react';

export default function LoginAdminPage() {
  return (
    <>
      <SeoPage
        title="Admin Login"
        description="Login page to enter admin"
        url={`${process.env.HOST}/admin/auth/login`}
      />
      <FormLogin />
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

  if (usersLength === 0) {
    return {
      redirect: {
        destination: '/admin/auth/register',
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
