import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ParSize extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: ReactNode,
    fontSize?: 'less' | 'aver' | 'big',
}