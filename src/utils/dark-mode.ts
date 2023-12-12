/**
 * dark mode utils
 * 
 * all functions, hooks associated with dark mode are in this file
 */

import { createContext } from "react";

const THEME_DARK_KEY = "THEME_DARK_KEY";

/**
 * check is dark mode
 * @returns is dark mode currently
 */
export function isDarkMode() {
  const isDark = localStorage.getItem(THEME_DARK_KEY);
  let darkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (isDark === null) {
    localStorage.setItem(THEME_DARK_KEY, darkMode + "");
  } else {
    darkMode = isDark === "true";
  }

  return darkMode;
}

/**
 * store the value that you want to set the theme whether light or dark
 * 
 * ## note: 
 * this function only set the value in localStorage, would not change the theme
 * 
 * if you want to change the theme to whether light or dark, you should use:
 * ```
 * import { DarkModeContext } from '@/utils/dark-mode';
 * import { useContext } from "react";
 * 
 * const setDark = useContext(DarkModeContext);
 * 
 * setDark(true);
 * ```
 * @param dark is dark mode
 */
export function setDarkMode(dark: boolean) {
  localStorage.setItem(THEME_DARK_KEY, dark + "");
}

/**
 * Context that change theme into whether light or dark
 */
export const DarkModeContext = createContext(null);
