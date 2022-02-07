import { useTheme } from 'next-themes';

import MoonIcon from '@icons/ic_moon.svg';
import SunIcon from '@icons/ic_sun.svg';

export default function DarkModeButton() {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('light');
    }
  };

  return (
    <button type="button" id="darkmode-button" aria-label="darkmode button" onClick={changeTheme}>
      <MoonIcon className="icon" id="icon-moon" />
      <SunIcon className="icon" id="icon-sun" />
    </button>
  );
}
