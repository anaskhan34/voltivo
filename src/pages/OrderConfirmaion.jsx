import { useDispatch, useSelector } from "react-redux";
import { Form, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import { clearCart } from "../Redux_Store/cartSlice";

export const OrderConfirm = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const subtotal = cartItems.reduce((acc, item) => {
    const discounted =
      item.product.price -
      (item.product.price * item.product.discountPercentage) / 100;

    return acc + discounted * item.quantity;
  }, 0);

  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    paymentMethod: "Cash on Delivery",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOrder = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "🚚 Order Placed Successfully ✅",
      icon: "success", // Predefined icons: 'warning', 'error', 'success', 'info', 'question'
    });
    setFormData({
      fullName: "",
      email: "",
      address: "",
      paymentMethod: "Cash on Delivery",
    });
    dispatch(clearCart());
    navigate("/");
  };
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* LEFT SIDE - Form */}
        <Form
          onSubmit={handleOrder}
          className="bg-white rounded-3xl shadow-2xl p-8 border-t-4 border-blue-500 w-full sm:max-w-md md:max-w-full mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Confirm Your Order
          </h2>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter Your FullName"
                required
                className="w-full border-2 text-black border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="you@example.com"
                className="w-full border-2 text-black border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Shipping Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                placeholder="House#01, 123 Main Street, City"
                className="w-full border-2 text-black border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Payment Method
              </label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                required
                className="w-full border-2 text-black border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
              >
                <option>Cash on Delivery</option>
                <option>Credit / Debit Card</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-8 bg-linear-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition"
          >
            Place Order
          </button>
        </Form>

        {/* RIGHT SIDE - Order Summary */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 h-fit border-t-4 border-indigo-500 w-full sm:max-w-md md:max-w-full mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Order Summary
          </h2>

          <div className="space-y-3 max-h-64 overflow-y-auto">
            {cartItems.map((item) => (
              <div
                key={item.product.id}
                className="flex justify-between text-sm text-gray-700 pb-3 border-b"
              >
                <span>
                  {item.product.title} × {item.quantity}
                </span>
                <span className="font-semibold">
                  $
                  {(
                    (item.product.price -
                      (item.product.price * item.product.discountPercentage) /
                        100) *
                    item.quantity
                  ).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t-2 mt-6 pt-4 space-y-3 text-sm">
            <div className="flex justify-between text-gray-700">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-gray-700">
              <span>Tax (5%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>

            <div className="flex justify-between font-bold text-lg text-blue-600 pt-3">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
