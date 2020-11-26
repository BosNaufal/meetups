import React from 'react'
import { useSelector } from 'react-redux' 
import styled from '@emotion/styled'
import VideoItem from './VideoItem'
import Autoplay from './Autoplay';

const VideoList = () => {
  const videoList = useSelector((state) => state.videoList)
  return (
    <Wrapper>
      <Autoplay />
      {videoList.map((item, index) => (
        <VideoItem
          key={index}
          id={item.id}
          title={item.title}
          viewsCount={item.viewsCount}
        />
      ))}
    </Wrapper>
  );
}

export default VideoList;

const Wrapper = styled.ul`
  display: block;
  flex: 1;
  list-style: none;
  margin: 0;
  padding: 0 16px;
  padding-left: 32px;
`