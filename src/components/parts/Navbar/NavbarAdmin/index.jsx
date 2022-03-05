import DropdownMenu from '@components/elements/DropdownMenu/DropdownMenu';
import DarkModeButton from '@components/elements/DarkModeButton';
import { signOut, useSession } from 'next-auth/react';

export default function NavbarAdmin() {
  const { data, status } = useSession();

  const handleLogout = () => {
    signOut({ callbackUrl: '/admin/auth/login' });
  };

  return (
    <nav className="container-admin navbar">
      <div className="navbar__nav navbar__nav--end">
        <DropdownMenu menu={[{ label: 'Logout', onClick: handleLogout }]}>
          {status === 'loading' && <p>...</p>}
          {status === 'authenticated' && <p>{data?.user?.name?.split(' ')[0]}</p>}
        </DropdownMenu>
        <DarkModeButton />
      </div>
    </nav>
  );
}
