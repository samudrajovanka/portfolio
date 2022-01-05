import NavbarBrand from '@components/Navbar/NavbarBrand';
import NavbarMenu from '@components/Navbar/NavbarMenu';
import List from '@components/Icons/List.svg';
import cn from 'classnames';
import { useState } from 'react';

export default function Navbar() {
  const [isOpenNavigation, setIsOpenNavigation] = useState(false);

  return (
    <header className={cn('sticky top-0 z-50')}>
      <nav className={cn('flex justify-between items-center py-5 backdrop-blur-sm bg-dark/80 padding-content')}>
        <NavbarBrand />

        <div>
          <button
            type="button"
            className={cn('min-h-[44px] p-2 sm:hidden')}
            aria-label="button open navigation"
            onClick={() => setIsOpenNavigation(true)}
          >
            <List className={cn('text-2xl')} />
          </button>

          <NavbarMenu isOpen={isOpenNavigation} onClose={() => setIsOpenNavigation(false)} />
        </div>
      </nav>
    </header>
  );
}
