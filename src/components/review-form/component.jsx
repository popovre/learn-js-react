import { useReducer } from 'react';
import styles from './style.module.scss';
import classNames from 'classnames';
import Button from '../button/component';

const INITIAL_FORM = {
  text: '',
  rating: 5,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'setText':
      return {
        ...state,
        text: payload,
      };
    case 'setRating':
      return {
        ...state,
        rating: payload,
      };
    case 'setMadRating':
      return {
        ...state,
        text: 'э, поставь повыше!',
        rating: +payload + 2,
      };
    case 'setMadRatingToo':
      return {
        ...INITIAL_FORM,
        text: 'сказано же...',
        rating: +payload + 1,
      };
    default:
      return {
        ...state,
      };
  }
};

const ReviewForm = ({ initialState, onSave, user }) => {
  const [form, dispatch] = useReducer(reducer, INITIAL_FORM);

  const onChangeRating = (e) => {
    return +e.target.value === 1
      ? dispatch({ type: 'setMadRating', payload: e.target.value })
      : +e.target.value === 2
      ? dispatch({ type: 'setMadRatingToo', payload: e.target.value })
      : dispatch({ type: 'setRating', payload: e.target.value });
  };

  return (
    <div className={styles.root}>
      <h3>Write your review</h3>
      <div className={styles.field}>
        <label htmlFor="name">Name</label>
        <input
          className={classNames(styles.input)}
          id="name"
          type="text"
          value={user?.name ? user.name : form.name}
          onChange={(e) =>
            dispatch({ type: 'setName', payload: e.target.value })
          }
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="text">Text</label>
        <input
          className={classNames(styles.input)}
          id="text"
          type="text"
          value={form.text}
          onChange={(e) =>
            dispatch({ type: 'setText', payload: e.target.value })
          }
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="rating">Rating</label>
        <input
          className={classNames(styles.input)}
          id="rating"
          type="number"
          min="0"
          max="5"
          value={form.rating}
          onChange={onChangeRating}
        />
      </div>
      <Button
        className={classNames(styles.button)}
        onClick={() => onSave(form)}
      >
        Сохранить
      </Button>
    </div>
  );
};

export default ReviewForm;
