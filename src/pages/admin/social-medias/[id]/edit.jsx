import SeoPage from '@components/elements/SeoPage';
import SocialMediaAdminEdit from '@components/parts/SocialMediaAdmin/SocialMediaAdminEdit';
import fetchAPI from '@lib/fetchApi';
import { getSession } from 'next-auth/react';

export default function SocialMediasAdminEditPage({ socialMedia, socialMedias }) {
  return (
    <>
      <SeoPage
        title="Social Media Edit | Jovanka Samudra"
        description="Edit social media admin page to edit data social media used on the page"
        url={`${process.env.HOST}/admin/social-medias/${socialMedia._id}/edit`}
      />
      <SocialMediaAdminEdit initialData={socialMedia} existData={socialMedias} />
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

  const response = await Promise.all([
    await fetchAPI(`/api/social-medias/${id}`, { headers: { cookie } }),
    await fetchAPI('/api/social-medias'),
  ]);

  const socialMediaResponse = response[0];

  if (!socialMediaResponse.success) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      socialMedias: response[1].data.socialMedias,
      socialMedia: socialMediaResponse.data.socialMedia,
    },
  };
}
