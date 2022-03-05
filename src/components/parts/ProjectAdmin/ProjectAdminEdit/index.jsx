import ButtonBack from '@components/elements/ButtonBack';
import FormProject from '@components/parts/Form/FormProject';
import PropTypes from 'prop-types';

export default function ProjectAdminEdit({ initialData }) {
  return (
    <section className="container-admin my-5">
      <ButtonBack />

      <h1 className="heading-3 my-6">Edit Project</h1>

      <FormProject initialData={initialData} />
    </section>
  );
}

ProjectAdminEdit.propTypes = {
  initialData: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
    stacks: PropTypes.array,
  }).isRequired,
};
