import classNames from 'classnames';

const Button = ({ children, disabled = false, className, onClick }) => {
  return (
    <button
      disabled={disabled}
      className={classNames(className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
