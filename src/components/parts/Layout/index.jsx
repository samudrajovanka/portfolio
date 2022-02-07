import Navbar from '@components/parts/Navbar';
import Footer from '@components/parts/Footer';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
