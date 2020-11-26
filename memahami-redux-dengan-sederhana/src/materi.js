
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
//    @media screen and (min-width: 40em) {
//      background: ${RED}
//    }