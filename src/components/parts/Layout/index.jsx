import { useRouter } from 'next/router';
import NavbarHome from '@components/parts/Navbar/NavbarHome';
import NavbarAdmin from '@components/parts/Navbar/NavbarAdmin';
import Footer from '@components/parts/Footer';
import Sidebar from '@components/parts/Sidebar';
import PropTypes from 'prop-types';

export default function Layout({ children }) {
  const router = useRouter();

  const getArrayPath = () => {
    const pathArray = router.asPath.split('/');
    pathArray.shift();

    return pathArray;
  };

  const isAdmin = getArrayPath()[0] === 'admin' && router.pathname !== '/404';

  if (isAdmin && getArrayPath()[1] === 'auth') {
    return (
      <div className="layout">
        <main>{children}</main>
      </div>
    );
  }

  if (isAdmin) {
    return (
      <div>
        <Sidebar />
        <div className="layout include-sidebar">
          <NavbarAdmin />
          <main>{children}</main>
        </div>
      </div>
    );
  }

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
