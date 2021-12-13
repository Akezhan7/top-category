import styles from './Button.module.scss';
import cn from 'classnames';
import { ButtonProps } from './Button.props';
import { ButtonSvg } from './ButtonSvg';

export const Button = ({appearance,arrow = "none", children, className, ...props}:ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearance == 'primary',
                [styles.ghost]: appearance == 'ghost',
            })}
            {...props}>
            {children}
            {arrow != 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow == 'down',
                [styles.right]: arrow == 'right',
            })}>
            <ButtonSvg id='svg'/>
            </span>}
        </button>
    )
}