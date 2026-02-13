import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { clearCart } from "../../Redux_Store/cartSlice";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaWallet } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const TotalPayment = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  // Subtotal (after individual product discount)
  const subtotal = cartItems.reduce((acc, item) => {
    const discountedPrice =
      item.product.price -
      (item.product.price * item.product.discountPercentage) / 100;

    return acc + discountedPrice * item.quantity;
  }, 0);

  // Original total (without discount)
  const originalTotal = cartItems.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);

  // Total discount amount
  const discountAmount = originalTotal - subtotal;

  // Tax (5%)
  const tax = subtotal * 0.05;

  // Final Total
  const finalTotal = subtotal + tax;

  // Total Items
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleProceed = () => {
    Swal.fire({
      title: "🚚Please Confirm Your Order",
      icon: "success", // Predefined icons: 'warning', 'error', 'success', 'info', 'question'
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-4 w-full max-w-sm mx-auto sticky top-24">
      <h2 className="text-gray-800 text-xl font-bold mb-4">Order Summary</h2>

      <div className="flex justify-between text-gray-600 text-sm">
        <span>Items ({totalItems})</span>
        <span>${originalTotal.toFixed(2)}</span>
      </div>

      <div className="flex justify-between text-green-600 text-sm">
        <span>Discount</span>
        <span>- ${discountAmount.toFixed(2)}</span>
      </div>

      <div className="flex justify-between text-gray-600 text-sm">
        <span>Tax (5%)</span>
        <span>${tax.toFixed(2)}</span>
      </div>

      <div className="border-t border-gray-200 pt-3 flex justify-between font-bold text-gray-800 text-lg">
        <span>Total</span>
        <span>${finalTotal.toFixed(2)}</span>
      </div>

      <NavLink to="/confirm-order">
        <button
          disabled={cartItems.length === 0}
          className="bg-blue-600 hover:bg-blue-700 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg mt-4 transition duration-300 flex items-center justify-center gap-2 w-full"
          onClick={handleProceed}
        >
          <span>Proceed to Checkout</span>
          <FaWallet className="text-lg" />
        </button>
      </NavLink>
    </div>
  );
};
