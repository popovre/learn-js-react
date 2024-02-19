import { ButtonViewVariant } from './contants';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { forwardRef } from 'react';

export const ButtonAmount = forwardRef(function Button(
  { onClick, children, className, viewVariant = ButtonViewVariant.primary },
  ref
) {
  return (
    <button
      ref={ref}
      className={classNames(styles.root, className, styles[viewVariant])}
      onClick={onClick}
    >
      {children}
    </button>
  );
});
