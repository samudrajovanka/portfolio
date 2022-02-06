import Button from '@components/elements/Button';
import CardDesign from '@components/elements/Card/CardDesign';
import Title from '@components/elements/Title';

export default function DesignPortfolio({ data }) {
  return (
    <section className="container py-10" id="design-portfolio">
      <Title as="h2" className="mx-auto">
        Design Portfolio
      </Title>

      <div className="mt-5 shots">
        {data.map((item) => (
          <CardDesign url={item.html_url} title={item.title} imgUrl={item.images.hidpi} key={item.id} />
        ))}
      </div>

      <Button href="https://dribbble.com/samudrajovanka" isExternal isShadow isAnimated className="mx-auto mt-10">
        See All in Dribbble
      </Button>
    </section>
  );
}
