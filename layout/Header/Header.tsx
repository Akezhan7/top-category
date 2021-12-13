import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import styles from './Header.module.scss';
import cn from 'classnames';

export interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Header = ({...props}:HeaderProps):JSX.Element => {
    return (
         <>
            <header {...props}>
            Header
            </header>
         </>
    )
}