import React from 'react'
import styled from '@emotion/styled'
import VideoItem from './VideoItem'
import Autoplay from './Autoplay';

const VIDEO_LIST = [
  { 
    id: 1, 
    title: "Ini Video statis",
    viewsCount: 1000, 
  },
  { 
    id: 2, 
    title: "Ini Video statis",
    viewsCount: 1000, 
  },
  { 
    id: 3, 
    title: "Ini Video statis",
    viewsCount: 1000, 
  }
]

const VideoList = () => {
  return (
    <Wrapper>
      <Autoplay />
      {VIDEO_LIST.map((item, index) => (
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