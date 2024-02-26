import classNames from 'classnames';
import styles from './style.module.scss';
import ReviewContainer from '../review/container';

const Reviews = ({ reviews }) => {
  return (
    <ul className={classNames(styles.reviewList)}>
      {reviews.map((review) => {
        return (
          <li className={classNames(styles.review)} key={review.id}>
            <ReviewContainer review={review} />
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
