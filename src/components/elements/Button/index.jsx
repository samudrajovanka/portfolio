/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';
import cn from 'classnames';
import Link from '@components/elements/Link';

export default function Button({
  children,
  type,
  variant,
  isAnimated,
  isShadow,
  onClick,
  href,
  className,
  isExternal,
}) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  if (href) {
    return (
      <Link
        href={href}
        isExternal={isExternal}
        className={cn(`btn btn--${variant}`, { 'btn--animated': isAnimated }, { 'btn--shadow': isShadow }, className)}
        onClick={handleClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={cn(`btn btn--${variant}`, { 'btn--animated': isAnimated }, { 'btn--shadow': isShadow }, className)}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
  isAnimated: false,
  isShadow: false,
  onClick: null,
  href: null,
  className: '',
  isExternal: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['primary']),
  isAnimated: PropTypes.bool,
  onClick: PropTypes.func,
  isShadow: PropTypes.bool,
  className: PropTypes.string,
  href: PropTypes.string,
  isExternal: PropTypes.bool,
};
