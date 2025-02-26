import React from 'react'

function Header() {
    console.log("Header render");
    
  return (
    <div>
      <h1 className='flex justify-center items-center text-3xl'>Header</h1>
    </div>
  )
}

export default React.memo(Header)
