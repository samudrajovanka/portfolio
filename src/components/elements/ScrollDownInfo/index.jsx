import PropTypes from 'prop-types';

import ArrowDownIcon from '@icons/ic_arrow-down.svg';

export default function ScrollDownInfo({ side }) {
  return (
    <div
      className={`scroll-down-info scroll-down-info--${side}`}
      style={{ '--deg': side === 'left' ? '-90deg' : '90deg' }}
    >
      <ArrowDownIcon className="icon" />
      <p>scroll down</p>
    </div>
  );
}

ScrollDownInfo.defaultProps = {
  side: 'left',
};

ScrollDownInfo.propTypes = {
  side: PropTypes.oneOf(['left', 'right']),
};
