
// 1. Space and layout props
// 2. Size Consistency
//    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
// 3. Color props
// 4. Color consistency
//    colors: {
//      primary: [
//        "#f48fb1",
//        "#f06292",
//        PINK, 
//      ],
//      secondary: BLUE,
//      white: WHITE,
//      black: "#000",
//    }
//    ${css({
//      color: "white",
//      bg: "secondary"
//    })}
// 5. Variants
//    ${variant({
//      variants: {
//        ghost: {
//          border: "1px solid",
//          borderColor: "primary",
//          background: "transparent",
//          color: "primary"
//        }
//      }
//    })}
// 6. Breakpoints
//    breakpoints: ['360px', '640px', '789px']


import styled from '@emotion/styled'
import { space, color, variant } from 'styled-system'
import css from '@styled-system/css'
import { Fragment } from 'react'
import { ThemeProvider } from '@emotion/react'

const RED = "#d50000"
const BLUE = "#2196f3"
const WHITE = "#fff"
const PINK = "#e91e63"

const theme = {
   breakpoints: ['640px', '789px'],
   space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
   colors: {
    red: RED,
    secondary: BLUE,
    white: WHITE,
    black: "#000",
    primary: [
      "#f48fb1",
      "#f06292",
      PINK, 
    ],
  }
}

const Button = styled.button`
  outline: none;
  border: 1px solid #DDD;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: 700;
  background: ${BLUE};
  color: ${WHITE};

  border-radius: 5px;
  font-size: 16px;

  ${space}
  ${color}

  @media screen and (min-width: 40em) {
    background: ${RED}
  }

  ${variant({
    variants: {
      ghost: {
        border: "1px solid",
        borderColor: "primary",
        background: "transparent",
        color: "primary"
      }
    }
  })}
`



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Button 
          margin={3} 
          marginX={4} 
          bg={["primary.0", "red"]} 
          color="black"
        >
          Styled Button 1
        </Button>  
        <Button
          bg={["secondary", "red"]} 
          variant="ghost"
        >Styled Button 2</Button>  
        <Button>Styled Button 3</Button>  
      </Fragment>
    </ThemeProvider>
  );
}

export default App;


