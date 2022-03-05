import PropTypes from 'prop-types';

export default function TableData({ children, width }) {
  return (
    <td width={width} className="table__data">
      {children}
    </td>
  );
}

TableData.defaultProps = {
  width: null,
};

TableData.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
};
