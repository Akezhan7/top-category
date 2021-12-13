import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TagElem extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode,
    size?: 'less' | 'big',
    color: 'ghost' | 'silver' | 'green' | 'primary' | 'red',
    href?: string,
}