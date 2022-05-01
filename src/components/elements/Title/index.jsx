import PropTypes from 'prop-types';
import cn from 'classnames';

export default function Title({ children, className, ...props }) {
  return (
    <h1 className={cn('title heading-2', className)} {...props}>
      {children}
      <span className="text-c-yellow">.</span>
    </h1>
  );
}

Title.defaultProps = {
  className: '',
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
