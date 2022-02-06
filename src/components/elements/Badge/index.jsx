import PropTypes from 'prop-types';

export default function Badge({ children }) {
  return (
    <div className="badge">
      <p>{children}</p>
    </div>
  );
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
};
