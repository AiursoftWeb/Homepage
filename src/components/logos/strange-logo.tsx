import { Logo } from './logo';
import { CyberLogo } from './cyber-logo';
import { isDarkMode } from '@/utils/dark-mode';

export function StrangeLogo() {

    const isDark = isDarkMode();

    return isDark ? <CyberLogo /> : <Logo />;
}