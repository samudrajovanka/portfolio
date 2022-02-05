/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';
import cn from 'classnames';

export default function Button({ children, type, variant, isAnimated, isShadow, onClick, className }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

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
  className: '',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['primary']),
  isAnimated: PropTypes.bool,
  onClick: PropTypes.func,
  isShadow: PropTypes.bool,
  className: PropTypes.string,
};
