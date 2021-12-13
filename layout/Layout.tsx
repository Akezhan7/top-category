import React, { FunctionComponent, ReactNode } from 'react';

import styles from './Layout.module.scss';
import cn from 'classnames';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';

export interface LayoutProps {
    children: ReactNode,
}

const Layout = ({children}:LayoutProps):JSX.Element => {
    return (
         <div className={cn(styles.wrapper)}>
            <Header className={cn(styles.header)}/>
            <Sidebar className={cn(styles.sidebar)}/>
            <div className={cn(styles.content)}>
                {children}
            </div>
            <Footer className={cn(styles.footer)}/>
         </div>
    )
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent (props: T):JSX.Element {
        return (
            <Layout>
                <Component {...props}/> 
            </Layout>
        )
    }
}