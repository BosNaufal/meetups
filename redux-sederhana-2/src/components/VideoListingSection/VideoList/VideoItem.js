import React from 'react'
import styled from '@emotion/styled'

const VideoItem = ({
  title,
  viewsCount,
}) => (
  <Wrapper>
    <div>
      <Thumbnail />
    </div>
    <div>
      <VideoTitle>
        <a href="#">{title}</a>
      </VideoTitle>
      <ViewsCount>{viewsCount} Views</ViewsCount>
    </div>
  </Wrapper>
)

export default VideoItem;

const Wrapper = styled.li`
  margin-bottom: 16px;
  display: flex;
`

const Thumbnail = styled.div`
  background: #DDD;
  width: 125px;
  height: 80px;
  margin-right: 16px;
`

const ViewsCount = styled.div`
  color: #888;
`

const VideoTitle = styled.h2`
  width: auto;
  margin: 0;
  font-size: 18px;
  a {
    text-decoration: none;
    color: #00ca9c;
  }
`