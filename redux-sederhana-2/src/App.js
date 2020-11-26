import React from 'react'
import styled from '@emotion/styled'
import { ThemeProvider } from '@emotion/react'
import VideoSection from './components/VideoSection'
import VideoListSection from './components/VideoListingSection'
import { Provider } from 'react-redux'
import store from './store'

const RED = "#d50000"
const BLUE = "#2196f3"
const WHITE = "#fff"
const PINK = "#e91e63"

const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors: {
    primary: [
      "#f48fb1",
      "#f06292",
      PINK, 
    ],
    secondary: BLUE,
    white: WHITE,
    black: "#000",
  },
  breakpoints: ["360px", "640px", "768px", "1204px"]
}

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
      <ThemeProvider theme={theme}>
        <PageWrapper>
          <VideoSection />
          <VideoListSection />
        </PageWrapper>
      </ThemeProvider>
    </Provider>
  );
}

export default App;


