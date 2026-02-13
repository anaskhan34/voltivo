import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../../Redux_Store/cartSlice";

export const ProductSummaryIndividualList = ({ items }) => {
  const { product, quantity } = items;
  const dispatch = useDispatch();

  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  const handleInc = () => {
    if (quantity < product.stock) {
      dispatch(increaseQuantity(product.id));
    }
  };

  const handleDec = () => {
    if (quantity > 1) {
      dispatch(decreaseQuantity(product.id));
    }
  };
  const linkClass =
    "text-red-600 text-md relative font-bold transition-all after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <div className="bg-slate-800/80 rounded-2xl shadow-2xl border border-slate-700 p-4">
      {/* Main Wrapper */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Image */}
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-24 h-24 object-contain bg-slate-900 p-2 rounded-xl mx-auto sm:mx-0"
        />

        {/* Details */}
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-blue-400 font-semibold">{product.title}</h2>
          <p className="text-gray-300 text-xs line-clamp-2">
            {product.description}
          </p>

          <div className="flex justify-center sm:justify-start items-center gap-2 mt-2">
            <span className="text-blue-500 font-bold text-sm">
              ${discountedPrice}
            </span>
            <span className="line-through text-gray-400 text-xs">
              ${product.price}
            </span>
          </div>
        </div>

        {/* Quantity Controls */}
        {/* Quantity Controls */}
        <div className="flex sm:flex-col items-center justify-between sm:justify-center gap-2 mt-4 sm:mt-0 shrink-0">
          <div className="flex items-center bg-slate-700 rounded-md overflow-hidden whitespace-nowrap">
            <button
              className="w-7 h-7 text-sm bg-blue-600 hover:bg-blue-500 text-white transition flex items-center justify-center"
              onClick={handleDec}
            >
              -
            </button>

            <span className="w-8 text-center text-white text-sm font-semibold">
              {quantity}
            </span>

            <button
              className="w-7 h-7 text-sm bg-blue-600 hover:bg-blue-500 text-white transition flex items-center justify-center"
              onClick={handleInc}
            >
              +
            </button>
          </div>

          <button
            // className="text-red-500 font-bold hover:text-red-400 text-md hover:underline"
            className={linkClass}
            onClick={() => dispatch(removeItem(product.id))}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
