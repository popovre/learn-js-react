import ReviewForm from '../review-form/component';
import { useCreateReviewMutation } from '../../redux/services/api';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user';

const CreateReviewFormContainer = ({ restaurantId }) => {
  const [createReview, { isLoading }] = useCreateReviewMutation();
  const { user } = useContext(UserContext);

  if (!user.name.length) {
    return null;
  }

  if (isLoading) {
    return <div>Creating review...</div>;
  }

  return (
    <ReviewForm
      user={user}
      onSave={(newReview) =>
        createReview({
          restaurantId,
          newReview: { ...newReview, userId: user.id },
        })
      }
    />
  );
};

export default CreateReviewFormContainer;
