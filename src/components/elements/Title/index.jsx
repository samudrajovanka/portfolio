import PropTypes from 'prop-types';
import cn from 'classnames';

export default function Title({ children, as, className, ...props }) {
  if (as === 'h2') {
    return (
      <h2 className={cn('title', className)} {...props}>
        {children}
        <span className="text-c-yellow">.</span>
      </h2>
    );
  }

  return (
    <h1 className={cn('title', className)}>
      {children}
      <span className="text-c-yellow">.</span>
    </h1>
  );
}

Title.defaultProps = {
  as: 'h1',
  className: '',
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.oneOf(['h1', 'h2']),
  className: PropTypes.string,
};
