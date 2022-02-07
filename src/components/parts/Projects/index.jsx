import CardProject from '@components/elements/Card/CardProject';
import Title from '@components/elements/Title';
import PropTypes from 'prop-types';

export default function Projects({ data }) {
  return (
    <section id="projects-section">
      <div className="container">
        <Title as="h2" className="mx-auto" data-aos="fade-up">
          Projects
        </Title>

        <div className="mt-5 grid-column-3 items-start">
          {data.map((item, index) => (
            <CardProject
              name={item.name}
              url={item.url}
              stacks={item.stacks}
              key={item.id}
              data-aos="flip-left"
              data-aos-delay={(index % 3) * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

Projects.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      stacks: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};
