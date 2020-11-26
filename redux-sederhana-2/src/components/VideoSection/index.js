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
      {/* <VideoPlayer src="/assets/videos/mixkit-coffee-powder-being-poured-on-the-coffee-maker-filter-4984.mp4" />
      <VideoInfo 
        title="Video Title"
        viewsCount={2}
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas vero distinctio autem hic accusamus aliquid voluptate minus officiis quidem. Perspiciatis, incidunt? Aperiam dolores quibusdam maxime itaque saepe facilis iure eos."
      /> */}

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