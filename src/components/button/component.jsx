import classNames from 'classnames';

const Button = ({ children, disabled = false, className, onClick }) => {
  const onButtonClickHandler = () => {
    onClick();
  };
  return (
    <button
      disabled={disabled}
      className={classNames(className)}
      onClick={onButtonClickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
