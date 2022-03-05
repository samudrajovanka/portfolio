import ButtonBack from '@components/elements/ButtonBack';
import FormExperience from '@components/parts/Form/FormExperience';

export default function ExperienceAdminCreate() {
  return (
    <section className="container-admin my-5">
      <ButtonBack />

      <h1 className="heading-3 my-6">New Experience</h1>

      <FormExperience />
    </section>
  );
}
