import classNames from 'classnames';
import styles from './reviewList.module.css';

const ReviewList = ({ review }) => {
  return (
    <ul className={classNames(styles.reviewList)}>
      {review.map((item) => {
        return (
          <li className={classNames(styles.item)} key={item.id}>
            {item.text}
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewList;
