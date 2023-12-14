import { Logo } from './logo';

export function CyberLogo() {
    return <div className='logo-cyber'>
        <Logo shadow={false} />
        <Logo className='cyber-dark-left' shadow={false} />
        <Logo className='cyber-dark-right' shadow={false} />
    </div>;
}
