import React from 'react'
import { Provider } from 'react-redux'
import styled from '@emotion/styled'
import VideoSection from './components/VideoSection'
import VideoListSection from './components/VideoListingSection'
import store from './store'

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
    <Provider store={store}>
      <PageWrapper>
        <VideoSection />
        <VideoListSection />
      </PageWrapper>
    </Provider>
  );
}

export default App;


