import Link from 'next/link';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function NavLinkItem({ href, children }) {
  const router = useRouter();

  const isActive = router.pathname === href;

  const colorText = isActive ? 'text-blue border border-blue rounded sm:border-none' : 'text-white';

  return (
    <motion.li whileHover={{ scale: 1.1 }}>
      <Link href={href}>
        <a
          className={cn(
            colorText,
            'hover:text-blue hover:border sm:hover:border-none hover:border-blue hover:rounded text-xl sm:text-base p-2 sm:p-0'
          )}
        >
          {children}
        </a>
      </Link>
    </motion.li>
  );
}

NavLinkItem.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
