import React from 'react'

function Container({children}) {
  return (
    <div className={`md:px-8 lg:px-20 lg:pb-8  mx-auto`}>
      {children}
    </div>
  )
}

export default Container