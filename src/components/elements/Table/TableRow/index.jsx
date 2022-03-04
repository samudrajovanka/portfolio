import PropTypes from 'prop-types';

export default function TableRow({ children }) {
  return <tr className="table__row">{children}</tr>;
}

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
};
