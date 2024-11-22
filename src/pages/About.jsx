import React from "react";
import { Target, Eye, Globe, Zap, Network, CheckCircle } from "lucide-react";
import Images from "../constants/Images";

function About() {
  const ValueCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white group border border-gray-200 rounded-xl shadow-lg p-8 text-center transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-yellow-500">
      <div className="mx-auto mb-6 w-20 h-20 bg-yellow-500/10 rounded-full flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
        <Icon className="w-10 h-10 text-yellow-600 group-hover:text-yellow-700 transition-colors" />
      </div>
      <h3 className="text-xl font-bold text-yellow-600 mb-4 group-hover:text-yellow-700 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
        {description}
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-6900 mb-6 leading-tight">
            About Us
          </h1>
        </div>
      </div>

      <section className="container mx-auto px-6 mb-16">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-10">
            <h2 className="text-3xl font-bold text-yellow-600 mb-6">
              Who We Are
            </h2>
            <p className="text-gray-700 leading-relaxed">
              IJH is a comprehensive inbound and outbound tour operator based in
              Dhaka, Bangladesh. We specialize in recruitment services,
              connecting the right talent to the right job opportunities
              worldwide. Registered as a Human Resources Firm, we proudly serve
              as a preferred Recruitment Business Partner for our clients.
            </p>
          </div>
          <div className="md:w-1/2 h-full">
            <img
              src={Images.card2}
              alt="Company Overview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 mb-16">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Mission & Vision
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-yellow-600 to-yellow-200 rounded-2xl p-8 text-white shadow-xl transform transition-all hover:scale-105">
            <div className="flex items-center mb-6">
              <Target className="w-12 h-12 mr-4" />
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="italic mb-4">
              "Having the right people for the right job"
            </p>
            <p>
              We go above and beyond to earn customer satisfaction through
              dedicated service and precise talent matching.
            </p>
          </div>
          <div className="bg-gradient-to-br from-yellow-600 to-yellow-200 rounded-2xl p-8 text-white shadow-xl transform transition-all hover:scale-105">
            <div className="flex items-center mb-6">
              <Eye className="w-12 h-12 mr-4" />
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p>
              To provide exceptional travel experiences and be a preferred
              employer offering an inspirational working environment where
              employees can thrive and grow.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 mb-16">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueCard
            icon={Zap}
            title="Adaptable"
            description="We thrive in dynamic environments by embracing change and finding innovative solutions to challenges."
          />
          <ValueCard
            icon={CheckCircle}
            title="Committed"
            description="Our unwavering dedication ensures we consistently deliver value to our customers, partners, and team members."
          />
          <ValueCard
            icon={Network}
            title="Straightforward"
            description="We foster transparency and simplicity in communication, building trust and clear understanding."
          />
          <ValueCard
            icon={Globe}
            title="Connections"
            description="We value meaningful relationships and collaborations that create lasting impacts for individuals and communities."
          />
        </div>
      </section>

      <section className="container mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl p-12">
          <h2 className="text-3xl font-bold text-yellow-600 mb-8 text-center">
            Why Partner With Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                <li className="flex items-center justify-center">
                  <CheckCircle className="mr-4 text-green-500" />
                  <span>We handle candidate sourcing and screening</span>
                </li>
                <li className="flex items-center justify-center">
                  <CheckCircle className="mr-4 text-green-500" />
                  <span>No need to advertise or sort through CVs</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-center justify-center">
                  <CheckCircle className="mr-4 text-green-500" />
                  <span>Comprehensive background and reference checks</span>
                </li>
                <li className="flex items-center justify-center">
                  <CheckCircle className="mr-4 text-green-500" />
                  <span>Verification of qualifications and credentials</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
