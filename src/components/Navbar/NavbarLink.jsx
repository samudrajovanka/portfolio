import cn from 'classnames';
import NavLinkItem from './NavLinkItem';

export default function NavLink() {
  return (
    <ul className={cn('flex gap-6')}>
      <NavLinkItem href="/">Home</NavLinkItem>
      <NavLinkItem href="/about">About</NavLinkItem>
      <NavLinkItem href="/portfolio">Portfolio</NavLinkItem>
      <NavLinkItem href="/blogs">Blog</NavLinkItem>
      <NavLinkItem href="/games">Game</NavLinkItem>
    </ul>
  );
}
