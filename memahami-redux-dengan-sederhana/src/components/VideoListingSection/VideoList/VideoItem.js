import React from 'react'
import { useDispatch } from 'react-redux'
import styled from '@emotion/styled'
import { PLAY_VIDEO } from '../../../store/reducer'

const VideoItem = ({
  id,
  title,
  viewsCount,
}) => {
  const dispatch = useDispatch()

  const playVideo = () => {
    dispatch({
      type: PLAY_VIDEO,
      id: id,
    })
  }

  return (
    <Wrapper>
      <div>
        <Thumbnail />
      </div>
      <div>
        <VideoTitle onClick={playVideo}>
          {title}
        </VideoTitle>
        <ViewsCount>{viewsCount} Views</ViewsCount>
      </div>
    </Wrapper>
  )
}

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
  color: #00ca9c;
  cursor: pointer;
`