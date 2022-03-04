import PropTypes from 'prop-types';
import cn from 'classnames';

export default function TableHead({ children, width, className }) {
  return (
    <th width={width} className={cn('table__head', className)}>
      {children}
    </th>
  );
}

TableHead.defaultProps = {
  width: null,
  className: null,
};

TableHead.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  className: PropTypes.string,
};
