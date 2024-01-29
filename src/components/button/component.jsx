import classNames from 'classnames';

const Button = ({ children, disabled = false, className, onClick, id }) => {
  const onButtonClickHandler = () => {
    onClick(id);
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
