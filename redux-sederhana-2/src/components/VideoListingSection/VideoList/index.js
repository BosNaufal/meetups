import React from 'react'
import styled from '@emotion/styled'
import VideoItem from './VideoItem'
import Autoplay from './Autoplay';

const VIDEO_LIST = [
  { 
    id: 1, 
    title: "Tutorial Menuangkan Kopi Bubuk",
    src: "/assets/videos/mixkit-coffee-powder-being-poured-on-the-coffee-maker-filter-4984.mp4",
    viewsCount: 1, 
  },
  { 
    id: 2, 
    title: "Manfaat Mengingat Waktu yang Terbatas",
    src: "/assets/videos/mixkit-slowly-approaching-a-clock-on-a-black-background-28897.mp4",
    viewsCount: 1, 
  },
  { 
    id: 3, 
    title: "Prank Mancing Buaya di Rawa",
    src: "public/assets/videos/mixkit-forest-stream-in-the-sunlight-529-small.mp4",
    viewsCount: 1, 
  }
]

const VideoList = () => {
  return (
    <Wrapper>
      <Autoplay />
      {VIDEO_LIST.map((item, index) => (
        <VideoItem
          key={index}
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