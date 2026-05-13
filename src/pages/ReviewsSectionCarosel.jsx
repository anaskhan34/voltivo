import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

function NextArrow(props) {
  const { onClick } = props;

  return (
    <div
      onClick={onClick}
      className="absolute right-[-15px] top-1/2 -translate-y-1/2 z-10 
      bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 
      flex items-center justify-center rounded-full cursor-pointer shadow-lg"
    >
      →
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;

  return (
    <div
      onClick={onClick}
      className="absolute left-[-15px] top-1/2 -translate-y-1/2 z-10 
      bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 
      flex items-center justify-center rounded-full cursor-pointer shadow-lg"
    >
      ←
    </div>
  );
}

export const ReviewsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-24 px-6" data-aos="fade-up">
      <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
        What Our Customers Say
      </h3>

      <div className="max-w-6xl mx-auto relative">
        <Slider {...settings}>
          {reviews.map((item) => (
            <div key={item.id} className="px-3">
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center min-h-[250px] flex flex-col justify-center">
                <p className="text-gray-600 italic mb-6">“{item.review}”</p>

                <h4 className="font-semibold text-gray-800 text-lg">
                  {item.name}
                </h4>

                <span className="text-sm text-gray-500">{item.role}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
