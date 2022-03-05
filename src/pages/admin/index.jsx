import SeoPage from '@components/elements/SeoPage';
import { getSession } from 'next-auth/react';

export default function AdminPage() {
  return (
    <>
      <SeoPage
        title="Admin Dashboard | Jovanka Samudra"
        description="Admin page to manage data sources used on the page"
        url={`${process.env.HOST}/admin`}
      />
      <section className="container-admin my-5">
        <h1>Admin Dashboard</h1>
      </section>
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
    props: {
      name: 'Admin',
    },
  };
}
