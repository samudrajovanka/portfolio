import cn from 'classnames';
import { motion } from 'framer-motion';
import Cross from '@components/Icons/Cross.svg';
import useViewport from '@lib/hooks/useViewport';
import { useEffect } from 'react';
import NavLinkItem from './NavLinkItem';

export default function NavbarMenu({ isOpen, onClose }) {
  const [width] = useViewport();

  const pathMenu = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Portfolio',
      path: '/portfolio',
    },
  ];

  const isMobile = width < 640;

  useEffect(() => {
    if (isOpen && !isMobile) {
      onClose();
    }
  });

  const DELAY_TIME = 0.5;

  const variantsMenu = {
    open: { width: '100%', padding: isMobile ? '25px 16px' : 0, opacity: 1 },
    closed: { width: 0, padding: 0, opacity: 0, transition: { delay: DELAY_TIME } },
  };

  const variantsMenuList = {
    open: { transform: 'scaleX(1)', transition: { delay: DELAY_TIME } },
    closed: { transform: 'scaleX(0)' },
  };

  return (
    <motion.div
      className={cn(
        'fixed sm:relative top-0 right-0 origin-right h-screen sm:h-auto padding-content bg-soft-dark sm:bg-transparent flex flex-col items-end'
      )}
      initial="closed"
      animate={isOpen || !isMobile ? 'open' : 'closed'}
      variants={variantsMenu}
    >
      <motion.button
        type="button"
        className={cn('min-h-[44px] p-2 sm:hidden')}
        aria-label="button close navigation"
        onClick={onClose}
        initial="closed"
        animate={isOpen || !isMobile ? 'open' : 'closed'}
        variants={variantsMenuList}
      >
        <Cross className={cn('text-2xl')} />
      </motion.button>
      <motion.ul
        className={cn('w-full flex-1 flex items-center justify-center flex-col sm:flex-row gap-6')}
        initial="closed"
        animate={isOpen || !isMobile ? 'open' : 'closed'}
        variants={variantsMenuList}
      >
        {pathMenu.map((item, index) => (
          <NavLinkItem key={index.toString()} href={item.path} onClose={onClose}>
            {item.name}
          </NavLinkItem>
        ))}
      </motion.ul>
    </motion.div>
  );
}
