import styled from '@emotion/styled'
import { space, color, variant, border } from 'styled-system'
import css from '@styled-system/css'

const Button = styled.button`
  outline: none;
  border: 1px solid #DDD;
  cursor: pointer;
  font-weight: 700;
  border-radius: 5px;
  font-size: 16px;
  
  padding: 8px 16px;

  ${css({
    bg: "secondary",
    color: "white"
  })}

  ${variant({
    variants: {
      ghost: {
        bg: "transparent",
        borderColor: "primary",
        color: "primary"
      }
    }
  })}

  ${space}
  ${color}
  ${border}
`

export default Button;


