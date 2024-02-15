import { useState } from 'react';
import { createPortal } from 'react-dom';
import CartContainer from '../cart/container';

import styles from './styles.module.scss';
import { useRef } from 'react';
import { ButtonAmount } from '../button-amount/component';

export const CartButton = ({ amount }) => {
  const [coordinates, setCoordinates] = useState(null);
  const buttonRef = useRef();

  const toggleCartModal = () => {
    if (coordinates) {
      setCoordinates(null);
      return;
    }

    const { bottom, left } = buttonRef.current.getBoundingClientRect();

    setCoordinates({ left, top: bottom });
  };

  return (
    <>
      <ButtonAmount ref={buttonRef} onClick={toggleCartModal}>
        {amount}
      </ButtonAmount>
      {coordinates &&
        createPortal(
          <div style={coordinates} className={styles.modal}>
            <CartContainer />
          </div>,
          document.getElementById('popoverContainer')
        )}
    </>
  );
};
