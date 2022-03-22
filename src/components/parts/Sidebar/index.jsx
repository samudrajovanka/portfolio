import BrandIcon from '@components/elements/BrandIcon';
import Link from '@components/elements/Link';
import cn from 'classnames';
import { useState } from 'react';
import { useRouter } from 'next/router';

import TriangleDownIcon from '@icons/ic_triangle_down.svg';
import uid from '@lib/uid';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const menus = [
    {
      label: 'Dashboard',
      link: '/admin',
    },
    {
      label: 'Social Medias',
      link: '/admin/social-medias',
    },
    {
      label: 'Experiences',
      link: '/admin/experiences',
    },
    {
      label: 'Projects',
      link: '/admin/projects',
    },
  ];

  const isActive = (path) => router.asPath === path;

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar-container">
      <div className={cn('backdrop', { 'backdrop--visible': isOpen })} onClick={toggleSidebar} aria-hidden="true" />
      <aside className={cn('sidebar', { 'sidebar--open': isOpen })}>
        <header className="sidebar__header">
          <Link href="/">
            <BrandIcon />
          </Link>

          <button
            type="button"
            className={cn('sidebar__btn-toggle', { 'sidebar__btn-toggle--open': isOpen })}
            aria-label="toggle sidebar"
            onClick={toggleSidebar}
          >
            <TriangleDownIcon />
          </button>
        </header>

        <div className="sidebar__menu">
          {menus.map((menu) => (
            <Link
              href={menu.link}
              className={cn('sidebar__menu-item', { 'sidebar__menu-item--active': isActive(menu.link) })}
              key={uid()}
              onClick={toggleSidebar}
            >
              {menu.label}
            </Link>
          ))}
        </div>
      </aside>
    </div>
  );
}
