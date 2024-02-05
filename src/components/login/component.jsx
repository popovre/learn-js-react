import classNames from 'classnames';
import styles from './style.module.scss';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user';

const Login = ({ setUser, className }) => {
  const user = useContext(UserContext);
  return (
    <div className={classNames(styles.root, className)}>
      <button
        className={classNames(styles.button, {
          [styles.logout]: user.name === 'validName',
        })}
        onClick={() =>
          user.name === '' && user.mail === ''
            ? setUser({ name: 'validName', mail: 'validMail' })
            : setUser('invalid')
        }
      >
        <span>
          {user.name === '' && user.mail === '' ? 'Log in' : 'Log out'}
        </span>
      </button>
    </div>
  );
};

export default Login;
