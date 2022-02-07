import Title from '@components/elements/Title';
import SocialMedia from '../SocialMedia';

export default function ConnectWithMe({ data }) {
  return (
    <section className="py-10 mb-10" data-aos="fade-up">
      <Title as="h2" className="mx-auto">
        Connect With Me
      </Title>
      <SocialMedia data={data} className="justify-center mt-5" />
    </section>
  );
}
