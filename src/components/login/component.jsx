import classNames from 'classnames';
import styles from './style.module.scss';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user';

import Modal from '../modal/component';
import { useState } from 'react';
import { user as USER_DEFAULT } from '../../constants/structures';
import LoginForm from '../login-form/component';

const Login = ({ className }) => {
  const { user, setUser } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={classNames(styles.root, className)}>
      <div className={classNames(styles.loginText)}>
        {user.name && (
          <p className={classNames(styles.user)}>
            You are welcome, {user.name} !
          </p>
        )}
        {!user.name && (
          <p className={classNames(styles.user)}>Log in to your account!</p>
        )}
        <button
          className={classNames(styles.button, {
            [styles.logout]: user.name === 'validName',
          })}
          onClick={() => {
            !user.name && !user.mail
              ? setShowModal(true)
              : setUser(USER_DEFAULT);
          }}
        >
          <span>{!user.name ? 'Log in' : 'Log out'}</span>
        </button>
      </div>
      {showModal && (
        <Modal
          className={classNames(styles.modal)}
          title="Log in to your account"
        >
          <LoginForm onClose={() => setShowModal(false)} />
        </Modal>
      )}
    </div>
  );
};

export default Login;
