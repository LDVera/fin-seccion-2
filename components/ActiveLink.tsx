import { CSSProperties } from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';


const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline',
}

interface Props {
    text: string;
    href: string;
    children?: React.ReactNode;
}

export const ActiveLink: React.FC<Props> = ({ text, href, children }) => {

    const { asPath } = useRouter();

    return (
        <Link legacyBehavior href={ href }>
            <a style={ asPath === href ? style : undefined }>{ text }</a>
        </Link>
        );
};



