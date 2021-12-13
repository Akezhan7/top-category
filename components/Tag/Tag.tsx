import {TagElem } from './Tag.props';
import styles from './Tag.module.scss';
import cn from 'classnames';
export const Tag = ({children, size='less', color, href, ...props}:TagElem):JSX.Element => {
    return (
        <div className={cn(styles.tag, {
            [styles.less]: size == 'less',
            [styles.big]: size == 'big',
            [styles.ghost]: color == 'ghost',
            [styles.silver]: color == 'silver',
            [styles.green]: color == 'green',
            [styles.red]: color == 'red',
            [styles.primary]: color == 'primary',
        })}{...props}>
            {
                href ? <a href={href}>{children}</a> : <>{children}</>
            }
        </div>
    )
}