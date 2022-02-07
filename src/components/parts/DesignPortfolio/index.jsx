import Button from '@components/elements/Button';
import CardDesign from '@components/elements/Card/CardDesign';
import Title from '@components/elements/Title';

export default function DesignPortfolio({ data }) {
  return (
    <section className="container py-10" id="design-portfolio-section">
      <Title as="h2" className="mx-auto" data-aos="fade-up">
        Design Portfolio
      </Title>

      <div className="mt-5 grid-column-3">
        {data.map((item, index) => (
          <CardDesign
            url={item.html_url}
            title={item.title}
            imgUrl={item.images.hidpi}
            key={item.id}
            data-aos="fade-up"
            data-aos-delay={(index % 3) * 100}
          />
        ))}
      </div>

      <Button href="https://dribbble.com/samudrajovanka" isExternal isShadow isAnimated className="mx-auto mt-10">
        See All in Dribbble
      </Button>
    </section>
  );
}
