import Login from '../login/component';
import styles from './style.module.scss';
import classNames from 'classnames';
import { CartButtonContainer } from '../cart-button/container';

const Header = () => {
  return (
    <header className={classNames(styles.root)}>
      <h1 className={classNames(styles.title)}>Header</h1>
      <div className={classNames(styles.userPanel)}>
        <CartButtonContainer />
        <Login className={classNames(styles.login)} />
      </div>
    </header>
  );
};

export default Header;
