import { useState, useEffect } from "react";

const reviews = [
  {
    id: 1,
    name: "Ali Raza",
    role: "Tech Enthusiast",
    review:
      "Amazing experience with Voltivo. Fast delivery aur product quality outstanding thi.",
  },
  {
    id: 2,
    name: "Sara Khan",
    role: "Content Creator",
    review:
      "Customer support bohat responsive hai. Mujhe best deal yahin se mili.",
  },
  {
    id: 3,
    name: "Waqar Rana",
    role: "Software Engineer",
    review:
      "Premium phones at unbeatable prices. Definitely recommend Voltivo!",
  },
  {
    id: 4,
    name: "Muhammad Ayan",
    role: "Business Owner",
    review:
      "Smooth shopping experience aur secure payment system. 10/10 service.",
  },
  {
    id: 5,
    name: "Hanzala",
    role: "Student",
    review:
      "Affordable prices aur genuine products. Bohat trust build hua brand pe.",
  },
];

export const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % reviews.length);
        setFade(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-24" data-aos="fade-up">
      <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
        What Our Customers Say
      </h3>

      <div className="relative max-w-3xl mx-auto px-6">
        {/* Review Card */}
        <div
          className={`bg-white rounded-2xl shadow-lg p-8 text-center transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-gray-600 italic px-4 mb-6 ">
            “{reviews[current].review}”
          </p>
          <h4 className="font-semibold text-gray-800">
            {reviews[current].name}
          </h4>
          <span className="text-sm text-gray-500">{reviews[current].role}</span>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 gap-3">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full transition ${
                current === index ? "bg-blue-600 scale-110" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};
