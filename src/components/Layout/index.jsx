import Navbar from '@components/Navbar';
import cn from 'classnames';
import PropTypes from 'prop-types';

export default function Layout({ children }) {
  return (
    <div className={cn('min-h-screen flex flex-col')}>
      <Navbar />

      <main className={cn('padding-content flex-1 flex')}>{children}</main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
