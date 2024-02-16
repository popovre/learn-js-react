import classNames from 'classnames';
import { forwardRef } from 'react';

const Button = forwardRef(function button(
  { children, disabled = false, className, onClick },
  ref
) {
  return (
    <button
      ref={ref}
      disabled={disabled}
      className={classNames(className)}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
});

export default Button;
