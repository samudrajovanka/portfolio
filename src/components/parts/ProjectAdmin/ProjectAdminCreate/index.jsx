import ButtonBack from '@components/elements/ButtonBack';
import FormCreateProject from '@components/parts/Form/FormProject';

export default function ProjectAdminCreate() {
  return (
    <section className="container-admin my-5">
      <ButtonBack />

      <h1 className="heading-3 my-6">New Project</h1>

      <FormCreateProject />
    </section>
  );
}
