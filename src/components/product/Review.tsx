import { FiUser } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import { Fragment } from "react";

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  title: string;
  content: string;
}

interface ReviewProps {
  reviews: Review[];
  className?: string;
}

function Review({ reviews, className = "" }: ReviewProps) {
  const averageRating = (
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
  ).toFixed(1);

  const getStarCount = (star: number) => {
    return reviews.filter((review) => review.rating === star).length;
  };

  const getStarPercentage = (star: number) => {
    return `${((getStarCount(star) / reviews.length) * 100).toFixed(0)}%`;
  };

  return (
    <div className={`${className}`}>
      <h3 className="text-xl font-semibold mb-4">カスタマーレビュー</h3>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <div className="flex items-center mb-2">
            <span className="font-medium text-xl mr-1">{averageRating}</span>
            <span className="text-sm text-kui-warning mr-2">★</span>
            <span className="text-xxs text-kui-secondary">
              ({reviews.length}件のレビュー)
            </span>
          </div>

          <div className="grid grid-cols-[auto_1fr_min-content] gap-x-2 gap-y-1 items-center">
            {[5, 4, 3, 2, 1].map((star) => (
              <Fragment key={star}>
                <span className="text-sm text-kui-default font-medium flex items-center gap-1">
                  <span className="w-2 text-center">{star}</span>
                  <span className="text-sm text-kui-warning">★</span>
                </span>
                <div className="w-full h-2 bg-kui-base rounded-full">
                  <div
                    className="h-full bg-kui-default rounded-full"
                    style={{ width: `${getStarPercentage(star)}` }}
                  ></div>
                </div>
                <span className="text-xxs text-kui-secondary whitespace-nowrap text-right">
                  {getStarPercentage(star)}
                </span>
              </Fragment>
            ))}
          </div>
        </div>

        {/* Reviews List */}
        <div className="lg:col-span-3 space-y-2">
          {reviews.map((review) => (
            <div key={review.id} className="bg-kui-base rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-kui-default/50 rounded-full flex items-center justify-center">
                    <FiUser className="text-kui-base" />
                  </div>
                  <span className="text-sm font-semibold text-kui-default">
                    {review.author}
                  </span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`text-sm ${
                          star <= review.rating
                            ? "text-kui-warning"
                            : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-xxs text-kui-secondary">
                  {review.date}
                </span>
              </div>
              {review.title && (
                <div className="mb-1 text-xs font-semibold text-kui-default">
                  {review.title}
                </div>
              )}
              <div className="text-xs text-kui-secondary leading-relaxed">
                <ReactMarkdown>{review.content}</ReactMarkdown>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Review;
