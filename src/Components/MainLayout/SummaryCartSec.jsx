import { ProductSummary } from "../UI/productSummary";
import { TotalPayment } from "../UI/TotalPayment";

export const SummaryCartSection = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left: Cart Items */}
        <div className="flex-1 flex flex-col gap-6">
          <ProductSummary />
        </div>

        {/* Right: Total Payment */}
        <div className="lg:w-1/3 w-full">
          <TotalPayment />
        </div>
      </div>
    </div>
  );
};
