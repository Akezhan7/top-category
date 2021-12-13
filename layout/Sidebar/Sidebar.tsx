import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import styles from './Sidebar.module.scss';
import cn from 'classnames';

export interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Sidebar = ({...props}:SidebarProps):JSX.Element => {
    return (
         <>
            <div {...props}>
                Sidebar
            </div>
         </>
    )
}