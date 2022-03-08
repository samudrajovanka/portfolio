import Badge from '@components/elements/Badge';
import Link from '@components/elements/Link';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

export default function CardProject({ name, url, stacks, ...props }) {
  return (
    <Link href={url} isExternal className="card card--center card-project" {...props}>
      <h4>{name}</h4>

      <ul className="card-project__stacks">
        {stacks.map((stack) => (
          <li key={uuid()}>
            <Badge>{stack}</Badge>
          </li>
        ))}
      </ul>
    </Link>
  );
}

CardProject.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  stacks: PropTypes.arrayOf(PropTypes.string).isRequired,
};
