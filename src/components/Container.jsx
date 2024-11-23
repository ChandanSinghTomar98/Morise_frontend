import React from 'react'

function Container({children}) {
  return (
    <div className={`md:px-28 lg:px-28 lg:pb-8 mx-auto`}>
      {children}
    </div>
  )
}

export default Container