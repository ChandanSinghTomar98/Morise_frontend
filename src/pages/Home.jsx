import React, { useEffect, useState, useRef, useContext } from "react";
import html2canvas from "html2canvas"
import Container from "../components/Container";
import { Download } from "lucide-react";
import { CreditCard, icons, Phone } from "lucide-react";
import { CheckCircle, DollarSign, Shield, Star } from "lucide-react";
import { AuthContext } from "../context/AuthContext"
import { Link, useNavigate } from "react-router-dom";
import { getUserById } from "../services/UserProfileApiManager";
import { getTestimonials } from "../services/TestimonialsApiManager"
import Images from "../constants/Images";
import MoriseCard from "../components/MoriseCard";

function Home() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [user, setUser] = useState("");
  const { isAuthenticated, login, logout } = useContext(AuthContext);
  const [testimonial, setTestimonialss] = useState([])
  console.log("dd", testimonial, "length", testimonial.length)

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

  useEffect(() => {
    const id = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    if (id && token) {
      getTestimonialses(id, token)
        .then((res) => {
          const data = res.data.data;
          setTestimonialss(data);
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
  // const cardRef = useRef(null);

  // const downloadCard = () => {
  //   if (cardRef.current) {
  //     html2canvas(cardRef.current).then((canvas) => {
  //       const link = document.createElement("a");
  //       link.download = "MoriseCard.png";
  //       link.href = canvas.toDataURL("image/png");
  //       link.click();
  //     });
  //   }
  // };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === testimonial?.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [testimonial?.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <Container>
      <div className=" mx-auto py-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {/* Morise Card Section */}
          {/* <div className="rounded-2xl shadow-lg border sm:px-10 md:px-16 lg:px-16 p-4 w-full mx-auto" ref={cardRef}>

            <div className="relative">
              <h1 className="text-center text-green-600 font-bold text-xl sm:text-2xl mb-4">
                MORISE CARD
              </h1>

              <div className="flex flex-row items-center gap-4 sm:gap-6">
                <div className="w-24 h-24 md:w-32 md:h-32 lg:w-32 lg:h-32   bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-16 h-16 text-gray-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM21 20a9 9 0 1 0-18 0" />
                  </svg>
                </div>

                <div className="flex-1 space-y-1.5 sm:space-y-2">
                  <p className="font-bold text-base sm:text-lg">
                    {user?.fullName || "John Doe"}
                  </p>
                  <p className="text-gray-700 font-semibold text-sm sm:text-base">
                    Software Engineer
                  </p>
                  <p className="text-gray-700 font-semibold text-sm sm:text-base">
                    BLOOD GROUP: A+
                  </p>
                  <p className="text-gray-700 font-semibold text-sm sm:text-base">
                    {user?.email || "john@example.com"}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-row justify-between items-center gap-4">
                <button className="bg-primary text-white px-4 sm:px-6 py-2 mx-3 rounded-full hover:bg-blue-800 transition-colors text-sm sm:text-base">
                  {user ? (user.status ? "Active":"inactive") : <Link to="/signup" >Register Now</Link> }
                </button>
                <button onClick={()=>downloadCard()} className="flex items-center gap-1 sm:gap-2 text-gray-700 hover:text-gray-900 transition-colors text-sm sm:text-base">
                  <Download size={18} />
                  Download
                </button>
              </div>

              <p className="text-center text-xs sm:text-sm font-medium text-gray-600 mt-4">
                A single card that opens doors to your international career.
              </p>
              {error && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/50">
                  <p className="text-red-500 text-sm sm:text-base">
                    {error || "An error occurred"}
                  </p>
                </div>
              )}
            </div>
          </div> */}
          <MoriseCard isactive={true} />

          {/* Get Started Section */}
          <div className="order-2 md:order-none p-6 rounded-lg max-w-3xl mt-5 shadow-lg border sm:px-10 md:px-16 lg:px-16 bg-primary">
            <div className="text-white p-8 rounded-lg">
              <h2 className="text-lg font-medium mb-4 md:w-[73%] lg:w-[73%] sm:w-auto m-auto text-center">
                Upload your documents securely for quick processing / Need
                Assistance
              </h2>
              <Link
                to="/documents"
                className="w-full bg-white text-primary md:mt-20 lg:mt-20  hover:bg-gray-200  py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-colors"
              >
                <span className="font-medium">
                  Get Started / Need Assistance
                </span>
              </Link>
            </div>
          </div>

          {/* Book a Call Section */}
          <div className="order-1 md:order-none">
            <div className="bg-white max-w-screen-lg rounded-lg shadow-md p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-12 rounded-full bg-primary hidden sm:block"></div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Book Free Consultation
                </h2>
              </div>

              <button className="w-full sm:w-auto bg-primary hover:bg-green-700 text-white px-10 py-3 rounded-full transition-colors duration-200 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                <span className="font-medium">BOOK A CALL</span>
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
                          <source src={`http://localhost:3001/uploads/${testimonial?.video}`} type="video/mp4" />
                          {console.log(`http://localhost:3001/uploads/${testimonial?.video}`)}
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
                          <p className="text-gray-600">{testimonial?.designation}</p>
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
                  className={`w-3 h-3 rounded-full transition-all ${currentSlide === index
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
