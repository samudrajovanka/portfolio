import { useEffect } from 'react';

export default function useClickOutside(ref, isOpen, close) {
  useEffect(() => {
    if (!isOpen) return;

    function handleClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        close();
      }
    }

    window.addEventListener('click', handleClick);

    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('click', handleClick);
    };
  });
}
