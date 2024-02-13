import styles from './style.module.scss';
import classNames from 'classnames';

import { createPortal } from 'react-dom';

const Modal = ({ children, title }) => {
  const modalContainer = document.querySelector('#modal-container');

  return createPortal(
    <div className={classNames(styles.root)}>
      <h3 className={classNames(styles.title)}>{title}</h3>
      {children}
    </div>,
    modalContainer
  );
};

export default Modal;
