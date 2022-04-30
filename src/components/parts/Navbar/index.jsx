import BrandIcon from '@components/elements/BrandIcon';
import DarkModeButton from '@components/elements/DarkModeButton';
import Link from '@components/elements/Link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar__nav">
        <Link href="/">
          <BrandIcon />
        </Link>
        <DarkModeButton />
      </div>
    </nav>
  );
}
