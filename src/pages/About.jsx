import Container from "../components/Container";
import Images from "../constants/Images";

const About = () => {
  return (
    <Container>
      <div className="bg-white py-5 text-gray-800">
        {/* Hero Section */}
        <section className="relative rounded-2xl h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <img
            src={Images.NationImg2}
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About Us
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                Morise is a pioneering platform under the umbrella of Humor
                India, designed to empower individuals to achieve their global
                career aspirations.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-10">
          <div className="container mx-auto px-6 md:px-20">
            <h2 className="text-2xl md:text-4xl font-bold text-[#275791]">
              Our Mission
            </h2>
            <p className="mt-4 text-lg leading-relaxed">
              At Morise, we are dedicated to empowering individuals to achieve
              their global career aspirations.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section
          className=" bg-cover bg-center"
          style={{
            backgroundImage: Images.NationImg,
          }}
        >
          <div className="bg-white/80 p-10 rounded-lg shadow-md container mx-auto px-6 md:px-20">
            <h2 className="text-2xl md:text-4xl font-bold text-[#275791]">
              Our Values
            </h2>
            <ul className="mt-4 space-y-4 text-lg">
              <li>
                <strong>Quality:</strong> We are unwavering in our commitment to
                deliver high-quality, reliable services to our users.
              </li>
              <li>
                <strong>Integrity:</strong> Transparency and ethical practices
                are at the core of everything we do.
              </li>
              <li>
                <strong>Affordability:</strong> With our ₹59 registration fee,
                we aim to provide opportunities that are accessible to all,
                irrespective of background.
              </li>
            </ul>
          </div>
        </section>

        {/* IJH International Section */}
        <section className="py-10">
          <div className="container mx-auto px-6 md:px-20">
            <h2 className="text-2xl md:text-4xl font-bold text-[#275791]">
              Our Association with IJH International
            </h2>
            <p className="mt-4 text-lg leading-relaxed">
              In collaboration with IJH International, a global leader in career
              and immigration services, Morise offers unparalleled expertise and
              guidance in navigating the visa process. This partnership ensures
              that our clients receive world-class services backed by years of
              international experience.
            </p>
            {/* Add Image Section */}
            <div className="flex flex-wrap gap-4 mt-6">
              <img
                src={Images.NationImg2}
                alt="IJH International"
                className="rounded-md shadow-lg w-full sm:w-[48%]"
              />
              <img
                src={Images.NationImg}
                alt="IJH International"
                className="rounded-md shadow-lg w-full sm:w-[48%]"
              />
            </div>
          </div>
        </section>

        {/* Concern for Nation Section */}
        <section
          className="bg-[#275791] rounded-2xl px-0 mx-0 bg-cover bg-center text-white"
          style={{
            backgroundImage: "url('assets/images/nation_bg.jpg')",
          }}
        >
          <div className="bg-black/50 p-16 rounded-2xl shadow-md  mx-auto px-6 md:px-20">
            <h2 className="text-2xl md:text-4xl font-bold">
              Our Concern for the Nation
            </h2>
            <p className="mt-4 text-lg leading-relaxed">
              At Morise, we believe in building a stronger nation by empowering
              its people. By facilitating access to global work opportunities,
              we aim to bring prosperity and skill development to individuals,
              which in turn contributes to the growth of our country. Our
              initiative reflects our deep-rooted commitment to fostering a
              brighter future for every Indian.
            </p>
          </div>
        </section>

        {/* Why Morise Section */}
        <section className="py-10">
          <div className="container mx-auto px-6 md:px-20">
            <h2 className="text-2xl md:text-4xl font-bold text-[#275791]">
              Why Morise?
            </h2>
            <ul className="mt-4 space-y-4 text-lg">
              <li>
                <strong>Affordable and Transparent Process:</strong> No hidden
                fees, just ₹59 to start your journey.
              </li>
              <li>
                <strong>A Product You Can Trust:</strong> Backed by the
                credibility of Humor India and the expertise of IJH
                International.
              </li>
              <li>
                <strong>Commitment to Excellence:</strong> Our team of experts
                ensures the highest standards of service.
              </li>
              <li>
                <strong>Nation-First Approach:</strong> We take pride in
                uplifting our community while helping individuals achieve global
                success.
              </li>
            </ul>
          </div>
        </section>

        {/* Call to Action Section */}
        <section
          className="py-10 bg-[#275791] text-white relative rounded-2xl"
          style={{
            backgroundImage: "url('/images/cta-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
          <div className="container mx-auto  px-6 md:px-20 text-center relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold">
              Join Morise Today
            </h2>
            <p className="mt-4 text-lg">
              Let Morise guide you on your journey to international career
              success!
            </p>
            <button className="mt-6 px-6 py-3 bg-white text-[#275791] font-bold text-lg rounded-lg hover:bg-gray-200 transition-all">
              Register Now
            </button>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default About;
