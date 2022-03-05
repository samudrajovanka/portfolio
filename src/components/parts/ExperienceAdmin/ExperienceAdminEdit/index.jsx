import ButtonBack from '@components/elements/ButtonBack';
import FormExperience from '@components/parts/Form/FormExperience';
import PropTypes from 'prop-types';

export default function ExperienceAdminEdit({ initialData }) {
  return (
    <section className="container-admin my-5">
      <ButtonBack />

      <h1 className="heading-3 my-6">Edit Experience</h1>

      <FormExperience initialData={initialData} />
    </section>
  );
}

ExperienceAdminEdit.propTypes = {
  initialData: PropTypes.shape({
    company: PropTypes.string,
    startMonth: PropTypes.string,
    endMonth: PropTypes.string,
    position: PropTypes.string,
    type: PropTypes.string,
    stacks: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
