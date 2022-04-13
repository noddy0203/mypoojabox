import React from 'react'
import Birds from "../video/birds_6891508/Birds_7.mp4"
const Video = () => {
  return (
    <div>
        <video autoPlay loop muted style={{
            position:"absolute", width:"100%", top:"30%", height:"400px", objectFit:"cover", zIndex:"-1"
        }}>
            <source src={Birds} type="video/mp4"></source>
        </video>
    </div>
  )
}

export default Video