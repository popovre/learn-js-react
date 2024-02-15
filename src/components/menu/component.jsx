import classNames from 'classnames';
import styles from './style.module.scss';
import Dish from '../dish/component';

const Menu = ({ dishIds }) => {
  return (
    <ul className={classNames(styles.list)}>
      {dishIds.map((id) => {
        return (
          <li className={classNames(styles.dish)} key={id}>
            <Dish id={id} key={id} />
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
