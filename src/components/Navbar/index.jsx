import NavbarBrand from '@components/Navbar/NavbarBrand';
import NavbarLink from '@components/Navbar/NavbarLink';
import cn from 'classnames';

export default function Navbar() {
  return (
    <header className={cn('sticky top-0')}>
      <nav className={cn('flex justify-between py-5 backdrop-blur-sm bg-dark/80 padding-content')}>
        <NavbarBrand />

        <div>
          <NavbarLink />
        </div>
      </nav>
    </header>
  );
}
