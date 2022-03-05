import PropTypes from 'prop-types';

export default function MenuItem({ children, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button type="button" className="menu-item" onClick={handleClick}>
      {children}
    </button>
  );
}

MenuItem.defaultProps = {
  onClick: null,
};

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
