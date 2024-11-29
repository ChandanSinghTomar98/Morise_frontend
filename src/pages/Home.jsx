import React, { useEffect, useState, useRef, useContext } from "react";
import html2canvas from "html2canvas";
import Container from "../components/Container";
import { Download } from "lucide-react";
import { CreditCard, Phone, Share2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { CheckCircle, DollarSign, Shield, Star } from "lucide-react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { getUserById } from "../services/UserProfileApiManager";
import { getTestimonials } from "../services/TestimonialsApiManager";
import Images from "../constants/Images";
import MoriseCard from "../components/MoriseCard";
import ContactModel from "../components/ContactModel";
import Testimonials from "../components/Testimonials";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState("");
  const { isAuthenticated, login, logout } = useContext(AuthContext);
  const [testimonial, setTestimonialss] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const bookCallBtn = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => setIsModalOpen(true);
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Check out our services",
          text: "Book a free consultation!",
          url: window.location.href,
        })
        .catch(console.error);
    } else {
      // Fallback for browsers that don't support Web Share API
      alert("Sharing not supported. Please copy the link manually.");
    }
  };

  console.log("dd", testimonial, "length", testimonial.length);
  const userId = localStorage.getItem("userId");
  console.log("userId", userId);

  const getUser = async (id, token) => {
    console.log("id hfhf", id, token);
    return await getUserById({
      id: id,
      token: token,
    });
  };

  const getTestimonialses = async (id, token) => {
    return await getTestimonials({
      id: id,
      token: token,
    });
  };

  useEffect(() => {
    const id = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    const getUser = async (id, token) => {
      console.log("id hfhf", id, token);
      return await getUserById({
        id: id,
        token: token,
      });
    };
    if (id && token) {
      getUser(id, token)
        .then((res) => {
          const data = res.data.data;
          setUser(data);
        })
        .catch((error) => {
          console.error("Error fetching user data", error);
        });
    }
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Software Engineer",
      company: "Tech Solutions Inc.",
      rating: 5,
      testimonial:
        "Morise helped me achieve my dream job abroad. The process was smooth and professional.",
      videoUrl: Images.video1,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Data Scientist",
      company: "Data Analytics Pro",
      rating: 5,
      testimonial:
        "Outstanding support throughout my visa application process. Highly recommended!",
      videoUrl: Images.video2,
    },
    {
      id: 3,
      name: "Emma Williams",
      role: "Product Manager",
      company: "Innovation Hub",
      rating: 5,
      testimonial:
        "The Morise team made my international career transition seamless and stress-free.",
      videoUrl: Images.video3,
    },
  ];

  return (
    <Container>
      <div className="mx-auto py-5">
        <marquee className="font-bold  text-[#CA8A04] rounded-md tracking-wide ">
          <p> Welcome to Morise – Your trusted partner for global opportunities!</p>
        </marquee>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-32 lg:px-32">
          {/* Morise Card Section */}
          <div>
            <MoriseCard isactive={true} user={user} />
          </div>

          {/* Upload Documents Section */}
          <div
            className="relative max-w-5xl order-2 md:order-none  p-8 rounded-lg shadow-lg border border-gray-300 overflow-hidden bg-cover bg-center"
            style={{
              backgroundImage: `url(${Images.NationImg2})`,
            }}
          >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
            {/* Content */}
            <div className="relative text-white p-6 rounded-lg text-center">
              <h2 className="text-lg md:text-2xl lg:text-2xl font-semibold mb-6 leading-relaxed">
                Upload your documents securely for quick processing <br /> or
                get the assistance you need.
              </h2>
              <Link
                to="/documents"
                className="inline-block bg-primary text-white hover:bg-blu-500  py-3 px-8 rounded-full font-medium shadow-md transition-transform duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Book a Call Section */}
          <div className="order-1 md:order-none">
            <div className="bg-white mx-auto rounded-lg shadow-md p-4 flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Content */}
              <div className="flex items-center gap-4">
                <div className="w-2 h-12 rounded-full bg-primary hidden sm:block"></div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Book Free Consultation
                </h2>
              </div>

              {/* Button */}
              <button
                onClick={bookCallBtn}
                className="w-full sm:w-auto bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-md flex items-center justify-center gap-2 transition-transform duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium text-sm">BOOK A CALL</span>
              </button>
            </div>
          </div>
          <ContactModel isOpen={isModalOpen} onClose={closeModal} />

          {/* Share Services Section */}
          <div>
            <div className="bg-white mx-auto rounded-lg shadow-md p-4 flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Content */}
              <div className="flex items-center gap-4">
                <div className="w-2 h-12 rounded-full bg-primary hidden sm:block"></div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Share Our Services
                </h2>
              </div>

              {/* Button */}
              <button
                onClick={handleShare}
                className="w-full sm:w-auto bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-md flex items-center justify-center gap-2 transition-transform duration-300 transform hover:scale-105"
              >
                <Share2 className="w-5 h-5" />
                <span className="font-medium text-sm">SHARE</span>
              </button>
            </div>
          </div>
        </div>

        {/* why choose us */}
        <div className="p-4 mt-10 ">
          <div className="text-center mb-12">
            <h2 class="text-2xl md:text-4xl font-bold text-[#275791] mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Morise, we ensure maximum success rates for work visas by
              providing reliable and efficient services. Our platform is
              tailored to make the process seamless and stress-free. With
              Morise, you're not just applying for a visa; you're building a
              career.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-4">
                Guaranteed Success Rate
              </h3>
              <p className="text-gray-600 text-center">
                Our experts increase your chances of approval.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-4">
                Affordable Pricing
              </h3>
              <p className="text-gray-600 text-center">
                Our mission is to make global careers accessible to everyone.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6 mx-auto">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-4">
                Secure Platform
              </h3>
              <p className="text-gray-600 text-center">
                Your data is safe and handled with care.
              </p>
            </div>
          </div>
          <div className=" mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  About the Morise Card
                </h2>
              </div>
              <div className="mb-8">
                <p className="text-lg text-gray-600 leading-relaxed">
                  The Morise Card is your ultimate career companion. Register
                  now and let us handle everything – from documentation to visa
                  success. With this card, your career aspirations know no
                  boundaries!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* testimonial */}
        <div className="pt-16 px-4">
          <div className="max-w-6xl mx-auto mb-12 text-center">
            <h2 class="text-2xl md:text-4xl font-bold text-[#275791] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Hear success stories from professionals who achieved their dreams
              with Morise
            </p>
          </div>

          {/* Carousel Container */}
          <div className=" relative">
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonial?.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-2">
                      <div className="relative aspect-video bg-gray-900">
                        <video
                          className="w-full h-full object-cover"
                          muted
                          autoPlay
                          loop
                          playsInline
                        >
                          <source
                            src={`http://localhost:3001/uploads/${testimonial?.video}`}
                            type="video/mp4"
                          />
                          {console.log(
                            `http://localhost:3001/uploads/${testimonial?.video}`
                          )}
                          Your browser does not support the video tag.
                          {console.log("hgfh", testimonial?.video)}
                        </video>
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>

                        <blockquote className="text-xl text-gray-600 italic mb-6">
                          "{testimonial?.description}"
                        </blockquote>

                        {/* Author Info */}
                        <div>
                          <h3 className="font-bold text-lg text-gray-800">
                            {testimonial?.name}
                          </h3>
                          <p className="text-gray-600">
                            {testimonial?.designation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-3 mt-6">
              {testimonial?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index
                      ? "bg-blue-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Home;
