import React from 'react'
import styled from '@emotion/styled'
import VideoSection from './components/VideoSection'
import VideoListSection from './components/VideoListingSection'

const PageWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  /* background: #ececec; */
  flex-wrap: wrap;
  position: relative;
`

function App() {
  return (
    <PageWrapper>
      <VideoSection />
      <VideoListSection />
    </PageWrapper>
  );
}

export default App;


