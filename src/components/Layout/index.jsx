import Navbar from '@components/Navbar';
import cn from 'classnames';
import PropTypes from 'prop-types';

export default function Layout({ children }) {
  return (
    <div className={cn('min-h-screen')}>
      <Navbar />

      <main className={cn('max-w-screen-2xl mx-auto')}>{children}</main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
