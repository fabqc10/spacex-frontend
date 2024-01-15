import React from 'react'
import Image from "next/image";


const Background = () => {
  return (
    <div className="background-container">
      <Image
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
        alt=""
        width={200}
        height={200}
      />
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
    </div>
  )
}

export default Background