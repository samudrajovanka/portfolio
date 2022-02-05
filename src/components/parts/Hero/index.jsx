import Button from '@components/elements/Button';
import ScrollDownInfo from '@components/elements/ScrollDownInfo';
import TextTyping from '@components/elements/TextTyping';
import SocialMedia from '@components/parts/SocialMedia';
import PropTypes from 'prop-types';

const textsTyping = ['Web Development', 'UI/UX Design', 'Backend Development'];

export default function Hero({ socialMedia }) {
  return (
    <section className="container height-screen hero" id="hero-section">
      <h1 className="font-medium text-center">
        Hi! I am <br />
        <span className="font-bold text-c-blue">Jovanka </span>
        <span className="font-bold text-c-yellow">Samudra</span>
      </h1>
      <p className="heading-3 text-center mt-5">
        I am an undergraduate Informatics student <br />
        who is interested <br className="block sm:hidden" />
        in <TextTyping texts={textsTyping} className="text-c-blue dark:text-c-yellow" />
      </p>
      <Button isAnimated isShadow className="mt-10">
        Show Portfolio
      </Button>
      <SocialMedia data={socialMedia} className="mt-20" />

      <ScrollDownInfo />
      <ScrollDownInfo side="right" />
    </section>
  );
}

Hero.propTypes = {
  socialMedia: PropTypes.arrayOf(PropTypes.object).isRequired,
};
