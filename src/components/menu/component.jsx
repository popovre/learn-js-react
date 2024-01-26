import classNames from 'classnames';
import styles from './style.module.scss';
import Dish from '../dish/component';

const Menu = ({ menu }) => {
  console.log(menu);
  return (
    <ul className={classNames(styles.list)}>
      {menu.map((dish) => {
        return (
          <li className={classNames(styles.dish)} key={dish.id}>
            <Dish dish={dish} />
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
