import Navbar from '@components/Navbar';
import PropTypes from 'prop-types';

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />

      <main>{children}</main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
