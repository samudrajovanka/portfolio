import SeoPage from '@components/elements/SeoPage';
import SocialMediaAdminView from '@components/parts/SocialMediaAdmin/SocialMediaAdminView';
import fetchAPI from '@lib/fetchApi';
import { getSession } from 'next-auth/react';

export default function SocialMediasAdminPage({ socialMedias }) {
  return (
    <>
      <SeoPage
        title="Social Medias | Jovanka Samudra"
        description="Social medias admin page to manage data social medias used on the page"
        url={`${process.env.HOST}/admin/social-medias`}
      />
      <SocialMediaAdminView data={socialMedias} />
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

  const socialMediasResponse = await fetchAPI('/api/social-medias');

  return {
    props: {
      socialMedias: socialMediasResponse.data.socialMedias,
    },
  };
}
