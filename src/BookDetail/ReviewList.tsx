import { Review } from "../type";
import ReviewItem from './ReviewItem'

export interface ReviewListProps {
    reviews: Review[];
}

const ReviewList = ({ reviews }: ReviewListProps) => {
    return (
        <div data-testid="reviews-container">
            {
                reviews.map(review => {
                    return (
                        <ReviewItem review={review} key={review.id} />
                    )
                })
            }
        </div>
    );
}
export default ReviewList