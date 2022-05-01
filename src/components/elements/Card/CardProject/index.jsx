import Badge from '@components/elements/Badge';
import Link from '@components/elements/Link';
import uid from '@lib/uid';
import PropTypes from 'prop-types';

export default function CardProject({ name, url, stacks, ...props }) {
  return (
    <Link href={url} isExternal {...props}>
      <div className="card card--center card-project">
        <h2 className="heading-4">{name}</h2>

        <ul className="card-project__stacks">
          {stacks.map((stack) => (
            <li key={uid()}>
              <Badge>{stack}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}

CardProject.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  stacks: PropTypes.arrayOf(PropTypes.string).isRequired,
};
