import Badge from '@components/elements/Badge';
import Link from '@components/elements/Link';
import PropTypes from 'prop-types';

export default function CardProject({ name, url, stacks }) {
  return (
    <Link href={url} isExternal className="card card--center card-project">
      <h4>{name}</h4>

      <div className="card-project__stacks">
        {stacks.map((stack, index) => (
          <Badge key={index.toString()}>{stack}</Badge>
        ))}
      </div>
    </Link>
  );
}

CardProject.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  stacks: PropTypes.arrayOf(PropTypes.string).isRequired,
};
