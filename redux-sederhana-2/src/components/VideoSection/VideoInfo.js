import React from 'react'
import styled from '@emotion/styled'

const VideoInfo = ({
  title,
  viewsCount,
  description,
}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <TotalViews>{viewsCount} Views</TotalViews>
      <Description>{description}</Description>
    </Wrapper>
  );
}

export default VideoInfo;


const Wrapper = styled.div`
  padding: 8px 8px;
`

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
`

const TotalViews = styled.div`
  color: #888;
  margin-bottom: 8px;
`

const Description = styled.div`
  color: #3c3c3c;
  font-size: 18px;
`
