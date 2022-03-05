import PropTypes from 'prop-types';
import cn from 'classnames';

export default function TagLabel({ children, noSelect }) {
  return <p className={cn('tag small-text', { 'tag--no-select': noSelect })}>{children}</p>;
}

TagLabel.defaultProps = {
  noSelect: false,
};

TagLabel.propTypes = {
  children: PropTypes.node.isRequired,
  noSelect: PropTypes.bool,
};
