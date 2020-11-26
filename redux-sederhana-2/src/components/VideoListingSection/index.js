import React from 'react'
import styled from '@emotion/styled'
import CategoryList from './CategoryList'
import VideoList from './VideoList'

const VideoListSection = () => {
  return (
    <Wrapper>
      <CategoryList />
      <VideoList />
    </Wrapper>
  );
}

export default VideoListSection;



const Wrapper = styled.div`
  padding-top: 40px;
  display: flex;
  width: 100%;
`
