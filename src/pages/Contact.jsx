import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Form } from "react-router-dom";
import Swal from "sweetalert2";

export const ContactPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Message Sent Successfully!",
      text: "We will get back to you soon.",
      icon: "success",
      confirmButtonColor: "#3b82f6",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-14">
      <div className="max-w-xl mx-auto px-4">
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-3 text-blue-400"
          data-aos="fade-up"
        >
          Get In Touch
        </h2>

        <p
          className="text-center text-gray-300 mb-8 text-sm md:text-base"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          We'd love to hear from you. Send us a message and we'll respond as
          soon as possible.
        </p>

        {/* Contact Form Card */}
        <div
          className="bg-slate-800/80 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-slate-700"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name */}
            <div>
              <label className="text-gray-200 font-medium text-sm mb-1 block">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-slate-600 rounded-lg px-3 py-2 text-white bg-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-gray-200 font-medium text-sm mb-1 block">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-slate-600 rounded-lg px-3 py-2 text-white bg-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="text-gray-200 font-medium text-sm mb-1 block">
                Subject
              </label>
              <input
                type="text"
                placeholder="Write subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border border-slate-600 rounded-lg px-3 py-2 text-white bg-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-gray-200 font-medium text-sm mb-1 block">
                Your Message
              </label>
              <textarea
                rows={4}
                placeholder="Write your message here..."
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-slate-600 rounded-lg px-3 py-2 text-white bg-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-linear-to-r from-blue-600 to-slate-900 hover:opacity-90 text-white py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:scale-[1.02]"
            >
              Send Message
            </button>
          </Form>
        </div>
      </div>
    </section>
  );
};
