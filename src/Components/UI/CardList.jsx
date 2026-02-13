import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addItem, removeItem } from "../../Redux_Store/cartSlice";

export const CardList = ({ product }) => {
  const dispatch = useDispatch();
  const checkItems = useSelector((store) => store.cart.items);

  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  const isInCart = checkItems.some((item) => item.product.id === product.id);

  return (
    <div className="bg-slate-800 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition duration-300 flex flex-col h-full border border-slate-700">
      {/* Image */}
      <div className="relative">
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          className="w-full h-40 object-contain bg-slate-900 p-3 rounded-t-2xl"
        />

        {/* Discount Badge */}
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
          -{product.discountPercentage}%
        </span>

        {/* Stock Status */}
        <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
          {product.availabilityStatus}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col grow">
        <h2 className="text-md font-semibold mb-1 text-blue-400 line-clamp-1">
          {product.title}
        </h2>

        <p className="text-gray-300 text-xs mb-2 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-blue-500 font-bold text-sm">
            ${discountedPrice}
          </span>
          <span className="line-through text-gray-400 text-xs">
            ${product.price}
          </span>
        </div>

        {/* Rating */}
        <div className="text-yellow-400 text-xs mb-2">
          ⭐ {product.rating} ({product.reviews.length} reviews)
        </div>

        {/* Extra Info */}
        <div className="text-gray-400 text-xs space-y-0.5 mb-3">
          <p>Brand: {product.brand}</p>
          <p>Stock: {product.stock}</p>
        </div>

        {/* Check It Out Button */}
        <NavLink to={`/products/${product.id}`}>
          <button className="max-w-30 mt-auto py-2.5 mb-2 px-3 rounded-lg text-sm font-bold transition bg-blue-600 hover:bg-blue-500 cursor-pointer text-white">
            Check It Out
          </button>
        </NavLink>

        {/* Add to Cart / Out of Stock Button */}
        <button
          disabled={product.stock === 0}
          onClick={() =>
            isInCart
              ? dispatch(removeItem(product.id))
              : dispatch(addItem(product))
          }
          className={`mt-auto py-2 px-3 rounded-lg cursor-pointer text-sm font-bold transition w-auto
            ${
              product.stock === 0
                ? "bg-red-500 cursor-not-allowed text-white"
                : isInCart
                  ? "bg-red-600 hover:bg-red-700 text-white"
                  : "bg-blue-700 hover:bg-slate-800 text-white"
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
  );
};
