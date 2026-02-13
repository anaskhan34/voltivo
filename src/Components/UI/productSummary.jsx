import { useSelector } from "react-redux";
import { ProductSummaryIndividualList } from "./ProductSummaryIndividualList";
import { NavLink } from "react-router-dom";

export const ProductSummary = () => {
  const products = useSelector((store) => store.cart.items);

  return (
    <div className="min-h-[65vh] bg-gray-50 py-16 px-6">
      {products.length === 0 ? (
        /* Empty Cart UI */
        <div className="flex flex-col items-center justify-center text-center mt-20">
          <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Your Cart is Empty
            </h2>
            <p className="text-gray-500 mb-6">
              Looks like you haven't added anything yet.
            </p>

            <NavLink to="/products">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition">
                Go Back To Shopping
              </button>
            </NavLink>
          </div>
        </div>
      ) : (
        /* Cart Items */
        <div className="max-w-6xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Your Cart Items
          </h2>

          {products.map((item) => (
            <ProductSummaryIndividualList key={item.product.id} items={item} />
          ))}
        </div>
      )}
    </div>
  );
};
