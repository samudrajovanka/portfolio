import Badge from '@components/elements/Badge';
import cn from 'classnames';
import PropTypes from 'prop-types';

export default function CardExperience({ company, position, type, notShowType, duration, stacks, className }) {
  return (
    <div className={cn('card card--center card-experience', className)}>
      <h3>{company}</h3>
      <p className="font-medium mt-5">
        {position}
        {!notShowType && <span className="font-light"> - {type}</span>}
      </p>

      <div className="stacks">
        {stacks.map((stack, index) => (
          <Badge key={index.toString()}>{stack}</Badge>
        ))}
      </div>

      <div className="duration">
        <p className="small-text text-c-blue">{duration}</p>
      </div>
    </div>
  );
}

CardExperience.defaultProps = {
  notShowType: false,
  className: '',
};

CardExperience.propTypes = {
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  notShowType: PropTypes.bool,
  duration: PropTypes.string.isRequired,
  stacks: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};
