import Button from '@components/elements/Button';
import ScrollDownInfo from '@components/elements/ScrollDownInfo';
import TextTyping from '@components/elements/TextTyping';
import SocialMedia from '@components/parts/SocialMedia';
import PropTypes from 'prop-types';

const textsTyping = ['Web Development', 'UI/UX Design', 'Backend Development'];

export default function Hero({ socialMedia, refExperience }) {
  const flyToPortfolio = () => {
    window.scrollTo({
      top: refExperience.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <section className="container height-screen center-flex" id="hero-section" data-aos="fade-down">
      <h1 className="font-handwriting text-center text-4xl md:text-5xl lg:text-6xl">
        Hi! I am <br />
        <span className="text-c-blue dark:text-c-yellow">Jovanka Samudra</span>
      </h1>
      <p className="heading-3 text-center mt-5">
        I am an undergraduate Informatics student <br />
        who is interested <br className="block sm:hidden" />
        in <TextTyping texts={textsTyping} className="text-c-blue dark:text-c-yellow" />
      </p>
      <Button isAnimated isShadow className="mt-10" onClick={flyToPortfolio}>
        Fly to Portfolio
      </Button>
      <SocialMedia data={socialMedia} className="mt-20" />

      <ScrollDownInfo />
      <ScrollDownInfo side="right" />
    </section>
  );
}

Hero.propTypes = {
  socialMedia: PropTypes.arrayOf(PropTypes.object).isRequired,
  refExperience: PropTypes.object.isRequired,
};
