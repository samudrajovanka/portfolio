import PropTypes from 'prop-types';

export default function Title({ children, as }) {
  if (as === 'h2') {
    return (
      <h2 className="title">
        {children}
        <span className="text-c-yellow">.</span>
      </h2>
    );
  }

  return (
    <h1>
      {children}
      <span className="text-c-yellow">.</span>
    </h1>
  );
}

Title.defaultProps = {
  as: 'h1',
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.oneOf(['h1', 'h2']),
};
