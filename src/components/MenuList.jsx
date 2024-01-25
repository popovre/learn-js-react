import classNames from 'classnames';
import styles from './menuList.module.css';

const MenuList = ({ menu }) => {
  return (
    <ul className={classNames(styles.list)}>
      {menu.map((item) => {
        return (
          <li className={classNames(styles.item)} key={item.id}>
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default MenuList;
