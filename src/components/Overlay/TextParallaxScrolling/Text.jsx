import cn from 'classnames';
import PropTypes from 'prop-types';
import style from './style.module.scss';

export default function Text({ children, speed }) {
  return (
    <p
      className={cn('w-full relative text-lg md:text-3xl lg:text-4xl pointer-events-none', style.text)}
      style={{ '--i': speed }}
    >
      {children}
    </p>
  );
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  speed: PropTypes.number.isRequired,
};
