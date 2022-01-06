import PropTypes from 'prop-types';
import cn from 'classnames';

export default function Heading({ children, heading, className }) {
  const font = 'font-fancy font-bold';

  if (heading === 'h1') {
    return <h1 className={cn(font, 'text-3xl md:text-4xl lg:text-6xl', className)}>{children}</h1>;
  }
  if (heading === 'h2') {
    return <h2 className={cn(font, 'text-2xl md:text-3xl lg:text-[3.25rem]', className)}>{children}</h2>;
  }
  if (heading === 'h3') {
    return <h3 className={cn(font, 'text-xl md:text-2xl lg:text-[2.5rem]', className)}>{children}</h3>;
  }
  if (heading === 'h4') {
    return <h4 className={cn(font, 'text-lg md:text-xl lg:text-3xl', className)}>{children}</h4>;
  }
  if (heading === 'h5') {
    return <h5 className={cn(font, 'text-base md:text-lg lg:text-[1.75rem]', className)}>{children}</h5>;
  }
  if (heading === 'h6') {
    return <h6 className={cn(font, 'text-sm md:text-base lg:text-2xl', className)}>{children}</h6>;
  }
}

Heading.defaultProps = {
  heading: 'h1',
  className: '',
};

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  heading: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  className: PropTypes.string,
};
