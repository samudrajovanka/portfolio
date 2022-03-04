import DropdownMenu from '@components/elements/DropdownMenu/DropdownMenu';
import DarkModeButton from '@components/elements/DarkModeButton';
import { signOut } from 'next-auth/react';

export default function NavbarAdmin() {
  const handleLogout = () => {
    signOut({ callbackUrl: '/admin/auth/login' });
  };

  return (
    <nav className="container-admin navbar">
      <div className="navbar__nav navbar__nav--end">
        <DropdownMenu menu={[{ label: 'Logout', onClick: handleLogout }]}>
          <p>Jovanka</p>
        </DropdownMenu>
        <DarkModeButton />
      </div>
    </nav>
  );
}
