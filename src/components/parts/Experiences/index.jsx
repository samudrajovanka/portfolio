import CardExperience from '@components/elements/Card/CardExperience';
import Title from '@components/elements/Title';
import PropTypes from 'prop-types';
import cn from 'classnames';
import moment from 'moment';

export default function Experiences({ data, refExperience }) {
  return (
    <section id="experience-section" ref={refExperience}>
      <div className="container" data-aos="fade-up">
        <Title className="mx-auto">Experiences</Title>

        <div className={cn('container mt-5 relative experiences', { 'sm:pb-5 md:pb-0 lg:pb-5': data.length > 1 })}>
          {data.map((item, index) => {
            const diffMonth = moment(item.endMonth).diff(moment(item.startMonth), 'months');
            const durationMonth = (diffMonth + 1) % 12;
            const duratinYear = Math.floor(diffMonth / 12);
            const fullDuration = `${duratinYear === 0 ? '' : `${duratinYear}Y`}${
              durationMonth === 0 ? '' : `${durationMonth}M`
            }`;

            return (
              <CardExperience
                key={item._id}
                company={item.company}
                position={item.position}
                type={item.type}
                duration={fullDuration}
                stacks={item.stacks}
                notShowType={item.type === 'Full Time'}
                className={cn({ 'lg:translate-y-5': index % 2 === 1 })}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

Experiences.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      startMonth: PropTypes.string.isRequired,
      endMonth: PropTypes.string.isRequired,
      stacks: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  refExperience: PropTypes.object.isRequired,
};
