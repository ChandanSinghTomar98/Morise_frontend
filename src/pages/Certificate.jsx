import React from 'react'

const Certificate = () => {
    const certificates = [
        { id: 1, certificate: "Document 1", image: "" },
        { id: 2, certificate: "Document 2", image: "" },
        { id: 3, certificate: "Document 3", image: "" },
        { id: 4, certificate: "Document 4", image: "" },
      ];
  return (
   <>
    <div className=" bg-[#E9EDC9] min-h-screen py-10">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6  mx-auto">
        {certificates.map((data, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={data.image}
              alt={data.certificate}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-lg font-semibold mt-4 text-gray-700">
              {data.certificate}
            </h2>
          </div>
        ))}
      </div>
    </div>
   </>
  )
}

export default Certificate;