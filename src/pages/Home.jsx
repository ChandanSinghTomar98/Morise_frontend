import React, { useEffect, useState, useContext } from "react";
import Container from "../components/Container";
import { CreditCard, Phone } from "lucide-react";
import { CheckCircle, DollarSign, Shield, Star } from "lucide-react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { getUserById } from "../services/UserProfileApiManager";
import MoriseCard from "../components/MoriseCard";
import Testimonials from "../components/Testimonials";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState("");
  const { isAuthenticated, login, logout } = useContext(AuthContext);
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



  // const testimonials = [
  //   {
  //     id: 1,
  //     name: "Sarah Johnson",
  //     role: "Software Engineer",
  //     company: "Tech Solutions Inc.",
  //     rating: 5,
  //     testimonial:
  //       "Morise helped me achieve my dream job abroad. The process was smooth and professional.",
  //     videoUrl: Images.video1,
  //   },
  //   {
  //     id: 2,
  //     name: "Michael Chen",
  //     role: "Data Scientist",
  //     company: "Data Analytics Pro",
  //     rating: 5,
  //     testimonial:
  //       "Outstanding support throughout my visa application process. Highly recommended!",
  //     videoUrl: Images.video2,
  //   },
  //   {
  //     id: 3,
  //     name: "Emma Williams",
  //     role: "Product Manager",
  //     company: "Innovation Hub",
  //     rating: 5,
  //     testimonial:
  //       "The Morise team made my international career transition seamless and stress-free.",
  //     videoUrl: Images.video3,
  //   },
  // ];
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

  

  return (
    <Container>
      <div className=" mx-auto py-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          <MoriseCard />

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
          <Testimonials />
        </div>
      </div>
    </Container>
  );
}

export default Home;
