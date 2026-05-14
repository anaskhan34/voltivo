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
      className="
      absolute right-1 md:right-[-18px]
      top-1/2 -translate-y-1/2
      z-20
      bg-blue-600 hover:bg-blue-700
      text-white
      w-9 h-9 md:w-10 md:h-10
      flex items-center justify-center
      rounded-full
      cursor-pointer
      shadow-xl
      transition
    "
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
      className="
      absolute left-1 md:left-[-18px]
      top-1/2 -translate-y-1/2
      z-20
      bg-blue-600 hover:bg-blue-700
      text-white
      w-9 h-9 md:w-10 md:h-10
      flex items-center justify-center
      rounded-full
      cursor-pointer
      shadow-xl
      transition
    "
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
    autoplaySpeed: 2200,
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div
      className="
      px-4 overflow-hidden

      [&_.slick-dots]:!bottom-[-45px]

      [&_.slick-dots_li_button:before]:!text-white
      [&_.slick-dots_li_button:before]:!opacity-50
      [&_.slick-dots_li_button:before]:!text-[12px]

      [&_.slick-dots_.slick-active_button:before]:!text-blue-500
      [&_.slick-dots_.slick-active_button:before]:!opacity-100
    "
      data-aos="fade-up"
    >
      {/* Heading */}
      <h3 className="text-3xl font-bold text-center text-white mb-14">
        What Our Customers Say
      </h3>

      {/* Slider */}
      <div className="max-w-6xl mx-auto relative">
        <Slider {...settings}>
          {reviews.map((item) => (
            <div key={item.id} className="px-3 py-4">
              <div
                className="
                bg-gradient-to-br
                from-slate-800
                via-slate-900
                to-slate-800
                border border-slate-600/40
                backdrop-blur-xl
                rounded-3xl
                shadow-2xl
                p-8
                min-h-[260px]
                flex flex-col justify-center text-center
                hover:-translate-y-2
                hover:border-blue-500
                hover:shadow-blue-500/20
                transition duration-300
              "
              >
                {/* Quote */}
                <div className="text-5xl text-blue-500 mb-4">“</div>

                {/* Review */}
                <p className="text-gray-300 leading-relaxed text-sm mb-6">
                  {item.review}
                </p>

                {/* Name */}
                <h4 className="text-lg font-bold text-white">{item.name}</h4>

                {/* Role */}
                <span className="text-blue-400 text-sm mt-1">{item.role}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
