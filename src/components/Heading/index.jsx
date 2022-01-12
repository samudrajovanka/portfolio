import PropTypes from 'prop-types';
import cn from 'classnames';

export default function Heading({ children, as, className }) {
  const font = 'font-fancy font-bold';

  if (as === 'h1') {
    return <h1 className={cn(font, className)}>{children}</h1>;
  }
  if (as === 'h2') {
    return <h2 className={cn(font, className)}>{children}</h2>;
  }
  if (as === 'h3') {
    return <h3 className={cn(font, className)}>{children}</h3>;
  }
  if (as === 'h4') {
    return <h4 className={cn(font, className)}>{children}</h4>;
  }
  if (as === 'h5') {
    return <h5 className={cn(font, className)}>{children}</h5>;
  }
  if (as === 'h6') {
    return <h6 className={cn(font, className)}>{children}</h6>;
  }
}

Heading.defaultProps = {
  as: 'h1',
  className: '',
};

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  className: PropTypes.string,
};
