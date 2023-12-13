import { Logo } from './logo';
import { CyberLogo } from './cyber-logo';

const logos = [<Logo />, <Logo />, <CyberLogo />];

export function StrangeLogo() {
    return logos[Math.floor(Math.random() * 10) % logos.length];
}