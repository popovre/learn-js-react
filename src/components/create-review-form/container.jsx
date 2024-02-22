import ReviewForm from '../review-form/component';
import { useCreateReviewMutation } from '../../redux/services/api';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user';

const CreateReviewFormContainer = ({ restaurantId }) => {
  const [createReview, { isLoading }] = useCreateReviewMutation();
  const { user } = useContext(UserContext);

  console.log(user);

  if (!user.name.length) {
    return null;
  }

  if (isLoading) {
    return <div>Creating review...</div>;
  }

  return (
    <ReviewForm onSave={(newReview) => createReview(restaurantId, newReview)} />
  );
};

export default CreateReviewFormContainer;
