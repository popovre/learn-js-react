import classNames from 'classnames';
import styles from './style.module.scss';
import Review from '../review/component';

const Reviews = ({ reviewIds }) => {
  return (
    <ul className={classNames(styles.reviewList)}>
      {reviewIds.map((id) => {
        return (
          <li className={classNames(styles.review)} key={id}>
            <Review id={id} key={id} />
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
