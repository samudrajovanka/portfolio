import PropTypes from 'prop-types';

export default function TagLabel({ children }) {
  return <p className="tag small-text">{children}</p>;
}

TagLabel.propTypes = {
  children: PropTypes.node.isRequired,
};
