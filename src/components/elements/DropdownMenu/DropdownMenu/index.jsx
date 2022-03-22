import { useRef, useState } from 'react';
import MenuItem from '@components/elements/DropdownMenu/MenuItem';
import cn from 'classnames';
import PropTypes from 'prop-types';

import TriangleDownIcon from '@icons/ic_triangle_down.svg';
import useClickOutside from '@lib/hooks/useClickOutside';
import uid from '@lib/uid';

export default function DropdownMenu({ children, menu }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useClickOutside(dropdownRef, isOpen, toggleDropdown);

  const onClickMenuItem = (onClick) => {
    if (onClick) {
      onClick();
    }

    setIsOpen(false);
  };

  return (
    <div className="dropdown-menu" ref={dropdownRef}>
      <button type="button" className="dropdown-menu__label" onClick={toggleDropdown}>
        {children}
        <TriangleDownIcon className={cn('dropdown-menu__label-icon', { 'dropdown-menu__label-icon--open': isOpen })} />
      </button>

      <div className={cn('dropdown-menu__menu', { 'dropdown-menu__menu--open': isOpen })}>
        {menu &&
          menu.map((item) => (
            <MenuItem onClick={() => onClickMenuItem(item.onClick)} key={uid()}>
              {item.label}
            </MenuItem>
          ))}
      </div>
    </div>
  );
}

DropdownMenu.propTypes = {
  children: PropTypes.node.isRequired,
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    })
  ).isRequired,
};
