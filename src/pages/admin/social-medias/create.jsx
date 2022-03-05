import SeoPage from '@components/elements/SeoPage';
import SocialMediaAdminCreate from '@components/parts/SocialMediaAdmin/SocialMediaAdminCreate';
import fetchAPI from '@lib/fetchApi';
import { getSession } from 'next-auth/react';

export default function SocialMediasAdminCreatePage({ socialMedias }) {
  return (
    <>
      <SeoPage
        title="Social Media Create | Jovanka Samudra"
        description="Create social media admin page to create new data social media used on the page"
        url={`${process.env.HOST}/admin/social-medias/create`}
      />
      <SocialMediaAdminCreate existData={socialMedias} />
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

  const response = await fetchAPI('/api/social-medias');

  return {
    props: {
      socialMedias: response.data.socialMedias,
    },
  };
}
