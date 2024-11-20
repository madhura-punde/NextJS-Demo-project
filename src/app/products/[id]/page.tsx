import axios from "axios";

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const { data } = await axios.get(`https://dummyjson.com/products/${id}`);

  const firstReview =
    data.reviews && data.reviews.length > 0 ? data.reviews[0] : null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 bg-white  shadow-md rounded-lg">
        {!data && (
          <div className="text-center text-red-600">Product not found.</div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img
            src={data.thumbnail}
            alt={data.title}
            className="rounded-lg shadow-lg object-cover"
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-gray-800">{data.title}</h1>
            <p className="text-gray-600">{data.description}</p>
            <p className="text-gray-700">
              <strong>Price:</strong> ${data.price}
            </p>
            {data.discountPercentage && (
              <p className="text-green-600">
                <strong>Discount:</strong> {data.discountPercentage}%
              </p>
            )}
            <p className="text-gray-700">
              <strong>Rating:</strong> ⭐ {data.rating}
            </p>
            <p className="text-gray-700">
              <strong>Brand:</strong> {data.brand}
            </p>
            <p className="text-gray-700">
              <strong>Category:</strong> {data.category}
            </p>
          </div>
          {firstReview && (
            <div className="mt-6 border-t pt-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Customer Review
              </h3>
              <p className="text-gray-700">
                <strong>Rating:</strong> ⭐ {firstReview.rating}
              </p>
              <p className="text-gray-600">
                <strong>Comment:</strong> {firstReview.comment}
              </p>
              <p className="text-gray-500 text-sm">
                <strong>By:</strong> {firstReview.reviewerName} (
                {firstReview.reviewerEmail})
              </p>
              <p className="text-gray-400 text-sm">
                <strong>Date:</strong>{" "}
                {new Date(firstReview.date).toLocaleDateString()}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
