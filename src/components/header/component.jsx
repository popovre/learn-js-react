import { useContext } from 'react';
import Login from '../login/component';
import styles from './style.module.scss';
import classNames from 'classnames';
import { UserContext } from '../../contexts/user';

const Header = ({ setUser }) => {
  const user = useContext(UserContext);
  return (
    <header className={classNames(styles.root)}>
      <h1 className={classNames(styles.title)}>Header</h1>
      <Login setUser={setUser} className={classNames(styles.login)} />
      {user.name === 'validName' && (
        <p className={classNames(styles.user)}>
          You are welcome, {user.name} !
        </p>
      )}
      {user.name === '' && (
        <p className={classNames(styles.user)}>Log in to your account!</p>
      )}
    </header>
  );
};

export default Header;
