import { ParSize } from './Par.props';
import styles from './Par.module.scss';
import cn from 'classnames';
export const Par = ({children, fontSize='aver'}:ParSize):JSX.Element => {
    return (
        <p className={cn(styles.text, {
            [styles.textsize14]: fontSize == 'less',
            [styles.textsize16]: fontSize == 'aver',
            [styles.textsize18]: fontSize == 'big',
        })}>{children}</p>
    )
}