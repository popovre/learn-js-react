import classNames from 'classnames';
import styles from './style.module.scss';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user';
import { createPortal } from 'react-dom';
import Modal from '../modal/component';
import { useState } from 'react';

const Login = ({ setUser, className }) => {
  const user = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={classNames(styles.root, className)}>
      <button
        className={classNames(styles.button, {
          [styles.logout]: user.name === 'validName',
        })}
        onClick={() => {
          user.name === '' && user.mail === ''
            ? setShowModal(true)
            : setUser('invalid');
        }}
      >
        <span>
          {user.name === '' && user.mail === '' ? 'Log in' : 'Log out'}
        </span>
      </button>
      {showModal &&
        createPortal(
          <Modal
            className={classNames(styles.modal)}
            onClose={() => setShowModal(false)}
            onLogin={(userData) => setUser(userData)}
          />,
          document.querySelector('main')
        )}
    </div>
  );
};

export default Login;
