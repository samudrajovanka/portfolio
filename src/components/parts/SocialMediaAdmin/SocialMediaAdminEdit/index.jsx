import ButtonBack from '@components/elements/ButtonBack';
import FormSocialMedia from '@components/parts/Form/FormSocialMedia';
import PropTypes from 'prop-types';

export default function SocialMediaAdminEdit({ initialData, existData }) {
  return (
    <section className="container-admin my-5">
      <ButtonBack />

      <h1 className="heading-3 my-6">Edit Social Media</h1>

      <FormSocialMedia initialData={initialData} existData={existData} />
    </section>
  );
}

FormSocialMedia.propTypes = {
  initialData: PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired,
  existData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string,
      icon: PropTypes.string,
    })
  ).isRequired,
};
