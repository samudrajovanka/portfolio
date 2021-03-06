import CardProject from '@components/elements/Card/CardProject';
import Title from '@components/elements/Title';
import PropTypes from 'prop-types';

export default function Projects({ data }) {
  return (
    <section id="projects-section">
      <div className="container">
        <Title className="mx-auto" data-aos="fade-up">
          Projects
        </Title>

        <div className="mt-5 grid-column-3 items-start">
          {data.map((item, index) => (
            <CardProject
              key={item._id}
              name={item.name}
              url={item.url}
              stacks={item.stacks}
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
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      stacks: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};
