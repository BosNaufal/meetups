import React from 'react'
import styled from '@emotion/styled'
import css from '@styled-system/css'
import { ThemeProvider } from '@emotion/react'
import Button from './Button'

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

const AntButtonAdvance = ({ children, className }) => (
  <button className={"ant-button " + className}>
    <span className="ant-button_span">
      {children}
    </span>
  </button>
)

const StyledAntButton = styled(AntButtonAdvance)`
  ${css({
    padding: 4,
    bg: "primary",
    color: "white"
  })}

  .ant-button_span {
    background: yellow;
    color: black;
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledAntButton>Coba Dulu</StyledAntButton>
      <Button 
        onClick={() => alert("Masuk gak nih?")}
        marginRight={3} 
        marginTop={3}
        bg={["primary", "secondary", "black"]}
      >Styled Button 1</Button>  
      <Button 
        variant="ghost" 
        borderColor={["secondary", "red", "black"]}
        color={["secondary", "red", "black"]}
      >Styled Button 2</Button>  
    </ThemeProvider>
  );
}

export default App;


