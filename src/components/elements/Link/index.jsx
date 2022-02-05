// eslint-disable-next-line import/no-named-default
import { default as NextLink } from 'next/link';
import PropTypes from 'prop-types';

export default function Link({ children, href, isExternal, target, label, className }) {
  const rel = isExternal ? 'noopener norefferer' : null;

  return (
    <NextLink href={href}>
      <a target={target} rel={rel} className={className} aria-label={label}>
        {children}
      </a>
    </NextLink>
  );
}

Link.defaultProps = {
  isExternal: false,
  target: '_self',
  label: null,
  className: null,
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  isExternal: PropTypes.bool,
  target: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
};
