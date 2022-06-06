import Image from 'next/image';
import logo from '@assets/images/logo.svg';

const Logo = (): JSX.Element => {
    return (
        <Image alt="Logo" src={logo} />
    );
}

export default Logo;