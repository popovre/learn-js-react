import ReviewForm from '../review-form/component';
import { useUpdateReviewMutation } from '../../redux/services/api';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user';
import { useEffect } from 'react';

const UpdateReviewFormContainer = ({ review, user, onUpdateFinished }) => {
  const [updateReview, { isLoading, isSuccess }] = useUpdateReviewMutation();

  useEffect(() => {
    if (isSuccess) {
      onUpdateFinished();
    }
  }, [onSuccess, onUpdateFinished]);

  if (!user || !review) {
    return null;
  }

  if (isLoading) {
    return <div>Updating review...</div>;
  }

  const { id, text, rating } = review;
  return (
    <ReviewForm
      initialState={{ text, rating }}
      user={user?.name}
      onSave={(updateReview) =>
        updateReview({
          reviewId: id,
          newReview: { ...updateReview, userId: user.id, id: id },
        })
      }
    />
  );
};

export default UpdateReviewFormContainer;
