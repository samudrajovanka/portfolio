import ButtonBack from '@components/elements/ButtonBack';
import FormSocialMedia from '@components/parts/Form/FormSocialMedia';
import PropTypes from 'prop-types';

export default function SocialMediaAdminCreate({ existData }) {
  return (
    <section className="container-admin my-5">
      <ButtonBack />

      <h1 className="heading-3 my-6">New Social Media</h1>

      <FormSocialMedia existData={existData} />
    </section>
  );
}

SocialMediaAdminCreate.propTypes = {
  existData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string,
      icon: PropTypes.string,
    })
  ).isRequired,
};
