import Link from 'next/link';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

export default function NavLinkItem({ href, children }) {
  const router = useRouter();

  const isActive = router.pathname === href;

  const colorText = isActive ? 'text-blue' : 'text-white';

  return (
    <li>
      <Link href={href}>
        <a className={cn(colorText, 'hover:text-blue')}>{children}</a>
      </Link>
    </li>
  );
}

NavLinkItem.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
