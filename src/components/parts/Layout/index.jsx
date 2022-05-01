import Navbar from '@components/parts/Navbar';
import Footer from '@components/parts/Footer';
import PropTypes from 'prop-types';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
