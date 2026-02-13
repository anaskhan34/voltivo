import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../Redux_Store/cartSlice";

export const IndividualProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const checkItems = useSelector((store) => store.cart.items);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/products/${id}`);
        if (res.status === 200) setProduct(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  if (!product)
    return (
      <p className="text-center mt-10 text-gray-300">Product not found!</p>
    );

  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  const isInCart = checkItems.some((item) => item.product.id === product.id);

  return (
    <>
      {product && (
        <div className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen py-10 px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl mx-auto bg-slate-800/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row gap-6 p-6 border border-slate-700">
            {/* Product Image */}
            <div className="flex justify-center md:w-1/2">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full max-w-sm object-contain rounded-2xl shadow-2xl bg-slate-900 p-2"
              />
            </div>

            {/* Product Details */}
            <div className="flex-1 flex flex-col justify-between md:w-1/2">
              <div>
                <h2 className="text-2xl font-bold text-blue-400 mb-2">
                  {product.title}
                </h2>
                <p className="text-gray-300 text-sm mb-4 line-clamp-4">
                  {product.description}
                </p>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-blue-500 font-bold text-lg">
                    ${discountedPrice}
                  </span>
                  <span className="line-through text-gray-400 text-sm">
                    ${product.price}
                  </span>
                  <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    -{product.discountPercentage}%
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-300">
                  <span className="text-yellow-400">
                    ⭐ {product.rating} ({product.reviews.length} reviews)
                  </span>
                  <span>Stock: {product.stock}</span>
                  <span>Brand: {product.brand}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 flex-wrap mt-4">
                {/* Go Back */}
                <NavLink to="/products">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-md transition shadow-lg hover:scale-105">
                    Go Back
                  </button>
                </NavLink>

                {/* Add to Cart / Out of Stock */}
                <button
                  disabled={product.stock === 0}
                  onClick={() =>
                    isInCart
                      ? dispatch(removeItem(product.id))
                      : dispatch(addItem(product))
                  }
                  className={`mt-auto py-2.5 px-4 rounded-md cursor-pointer text-sm font-medium transition shadow-lg hover:scale-105
                ${
                  product.stock === 0
                    ? "bg-red-500 cursor-not-allowed text-white"
                    : isInCart
                      ? "bg-red-600 hover:bg-red-700 text-white"
                      : "bg-blue-700 hover:bg-slate-700 text-white"
                }`}
                >
                  {product.stock === 0
                    ? "Out of Stock"
                    : isInCart
                      ? "Remove From Cart"
                      : "Add To Cart"}
                </button>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="max-w-2xl mx-auto mt-8 p-4 bg-slate-800/80 rounded-2xl shadow-2xl border border-slate-700 text-gray-300">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">
              Reviews
            </h3>
            <ul className="space-y-2">
              {product.reviews.map((review, idx) => (
                <li key={idx}>
                  <span className="font-semibold text-white">
                    {review.reviewerName}:
                  </span>{" "}
                  {review.comment}{" "}
                  <span className="text-yellow-400">⭐{review.rating}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
