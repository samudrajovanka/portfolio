import PropTypes from 'prop-types';
import cn from 'classnames';

export default function Table({ children, className }) {
  return (
    <div className="table-container">
      <table className={cn('table', className)}>{children}</table>
    </div>
  );
}

Table.defaultProps = {
  className: null,
};

Table.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
