import { ButtonHTMLAttributes, memo } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly size?: 's' | 'm' | 'l';
  readonly href?: string;
  readonly theme?: 'primary' | 'icon' | 'secondary' | 'tertiary' | 'third';
  readonly width?: 'auto' | 'max';
}

export const Button = memo(
  ({
    children,
    size = 'm',
    href = '',
    theme = 'primary',
    disabled = false,
    type = "button",
    className,
    width = 'auto',
    onClick,
    ...rest
  }: ButtonProps) => {
    return (
      <>
        {href ? (
          <Link to={href}>
            <button
              className={classNames(
                styles.btn,
                styles[`theme_${theme}`],
                styles[`btn-size_${size}`],
                styles[`btn-width_${width}`],
                {
                  [styles['btn-disabled']]: disabled,
                },
                className
              )}
              disabled={disabled}
              onClick={onClick}
              type={type}
              {...rest}
            >
              {children}
            </button>
          </Link>
        ) : null}
        {!href && (
          <button
            className={classNames(
              styles.btn,
              styles[`theme_${theme}`],
              styles[`btn-size_${size}`],
              styles[`btn-width_${width}`],
              {
                [styles['btn-disabled']]: disabled,
              },
              className
            )}
            disabled={disabled}
            onClick={onClick}
            type={type}
            {...rest}
          >
            {children}
          </button>
        )}
      </>
    );
  }
);
