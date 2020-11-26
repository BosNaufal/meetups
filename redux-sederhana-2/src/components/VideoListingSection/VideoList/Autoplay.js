import React from 'react'
import styled from '@emotion/styled'

const Autoplay = () => {
  return (
    <AutoPlayWrapper>
      <input type="checkbox" />
      <label>Autoplay</label>
    </AutoPlayWrapper>
  );
}

export default Autoplay;

const AutoPlayWrapper = styled.div`
  margin-bottom: 16px;
  input {
    margin-right: 8px;
  }
  label {
    font-size: 18px;
  }
`