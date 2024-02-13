import classNames from 'classnames';
import styles from './style.module.scss';
import Dish from '../dish/component';

const Menu = ({ menuIds }) => {
  return (
    <ul className={classNames(styles.list)}>
      {menuIds.map((id) => {
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
