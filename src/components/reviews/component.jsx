import classNames from 'classnames';
import styles from './style.module.scss';
import Review from '../review/component';

const Reviews = ({ reviews }) => {
  return (
    <ul className={classNames(styles.reviewList)}>
      {reviews.map((review) => {
        return (
          <li className={classNames(styles.review)} key={review.id}>
            <Review review={review} />
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
