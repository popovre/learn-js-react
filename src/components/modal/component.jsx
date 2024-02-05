import styles from './style.module.scss';
import classNames from 'classnames';
import { user as USER_DEFAULT } from '../../constants/structures.js';
import { useReducer } from 'react';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'setName':
      return {
        ...state,
        name: payload,
      };
    case 'setMail':
      return {
        ...state,
        mail: payload,
      };
    default:
      return {
        ...USER_DEFAULT,
      };
  }
};
const Modal = ({ onClose, onLogin }) => {
  const [form, dispatch] = useReducer(reducer, USER_DEFAULT);
  return (
    <div className={classNames(styles.root)}>
      <h3 className={classNames(styles.title)}>Log in to your account</h3>
      <button
        className={classNames(styles.closeButton, styles.button)}
        onClick={onClose}
      >
        Close
      </button>
      <div className={styles.field}>
        <label htmlFor="name">Name</label>
        <input
          className={classNames(styles.input)}
          id="name"
          type="text"
          value={form.name}
          onChange={(e) =>
            dispatch({ type: 'setName', payload: e.target.value })
          }
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="mail">Mail</label>
        <input
          className={classNames(styles.input)}
          id="mail"
          type="text"
          value={form.mail}
          onChange={(e) =>
            dispatch({ type: 'setMail', payload: e.target.value })
          }
        />
      </div>

      <button
        className={classNames(styles.loginButton, styles.button)}
        onClick={() => {
          onLogin(form);
        }}
      >
        Log in
      </button>
    </div>
  );
};

export default Modal;
