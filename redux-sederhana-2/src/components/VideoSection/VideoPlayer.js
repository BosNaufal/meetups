import React from 'react'

const VideoPlayer = ({
  src,
}) => {
  return (
    <video 
      width="100%" 
      autoPlay={true}
      controls={true}
      src={src}
    />
  );
}

export default VideoPlayer;