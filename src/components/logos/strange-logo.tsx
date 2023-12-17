import { Logo } from './logo';
import { CyberLogo } from './cyber-logo';
import { LogoPng } from './logo-png';
import { isDarkMode } from '@/utils/dark-mode';
import { isMobile } from 'is-mobile';

export function StrangeLogo() {

    const isDark = isDarkMode();

    return isMobile() ? 
        <LogoPng /> : 
        (isDark ? <CyberLogo /> : <Logo className='logo-normal' />);
}