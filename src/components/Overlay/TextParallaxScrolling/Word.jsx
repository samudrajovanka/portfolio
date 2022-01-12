import cn from 'classnames';
import PropTypes from 'prop-types';
import style from './style.module.scss';

export default function Word({ children }) {
  return <span className={cn('text-blue mx-1 md:mx-2', style.word)}>{children}</span>;
}

Word.propTypes = {
  children: PropTypes.node.isRequired,
};
