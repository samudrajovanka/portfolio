import NavbarHome from '@components/parts/Navbar';
import Footer from '@components/parts/Footer';
import PropTypes from 'prop-types';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <NavbarHome />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
