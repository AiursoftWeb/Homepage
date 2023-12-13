import { Logo } from './logo';
import { isDarkMode } from '@/utils/dark-mode';

export function CyberLogo() {

    const isDark = isDarkMode();

    return <div className={`logo-cyber ${isDark ? 'cyber-dark' : 'cyber-light'}`}>
        <Logo className={`${!isDark && 'cyber-light-animate'}`} shadow={false} />
        <Logo className={`${isDark && 'cyber-dark-left'}`} shadow={false} />
        <Logo className={`${isDark && 'cyber-dark-right'}`} shadow={false} />
    </div>;
}
