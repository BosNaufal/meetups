import React from 'react'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'
import VideoPlayer from './VideoPlayer'
import VideoInfo from './VideoInfo'

const VideoSection = () => {
  const currentVideo = useSelector((state) => state.currentVideo)

  if (currentVideo === null) return null
  return (
    <Wrapper>
      <VideoPlayer src={currentVideo.src} />
      <VideoInfo 
        title={currentVideo.title}
        viewsCount={currentVideo.viewsCount}
        description={currentVideo.description}
      />
    </Wrapper>
  );
}

export default VideoSection;



const Wrapper = styled.div`
  display: inline-block;
  width: 100%;
`