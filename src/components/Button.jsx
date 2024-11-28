import React from 'react'

function Button({handlebutton,hidden}) {
  return (
    <div className={`${hidden? "hidden"
              : "mt-5 m-auto w-fit"}`}>  
    <button
   
          onClick={handlebutton} // Attach the download function
          className="bg-primary m-auto text-white px-4 sm:px-6 py-2 mx-3 rounded-full hover:bg-blue-800 transition-colors text-sm sm:text-base"
        >
          Download Morise Card
        </button>
     </div>   
  )
}

export default Button
