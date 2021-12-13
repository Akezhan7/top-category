import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import styles from './Footer.module.scss';
import cn from 'classnames';
import {format} from 'date-fns'
export interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Footer = ({...props}:FooterProps):JSX.Element => {
    return (
         <>
            <footer {...props}>
                <p className={cn(styles.footer__text1)}>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</p>
                <div className={cn(styles.footer__text2)}>
                    <p>Пользовательское соглашение</p>
                    <p>Политика конфиденциальности</p>
                </div>
            </footer>
         </>
    )
}