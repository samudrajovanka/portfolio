import CardExperience from '@components/elements/Card/CardExperience';
import Title from '@components/elements/Title';
import PropTypes from 'prop-types';
import cn from 'classnames';

export default function ProfessionalExperience({ data }) {
  return (
    <section id="professional-exp-section">
      <div className="container">
        <Title as="h2" className="mx-auto">
          Professional Experience
        </Title>

        <div className={cn('container mt-5 relative experiences', { 'sm:pb-5 md:pb-0 lg:pb-5': data.length > 1 })}>
          {data.map((item, index) => (
            <CardExperience
              company={item.company}
              position={item.position}
              type={item.type}
              duration={item.duration}
              stacks={item.stacks}
              key={index.toString()}
              notShowType={item.type === 'Full Time'}
              className={cn({ 'sm:translate-y-5 md:translate-y-0 lg:translate-y-5': index % 2 === 1 })}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

ProfessionalExperience.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      stacks: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};
