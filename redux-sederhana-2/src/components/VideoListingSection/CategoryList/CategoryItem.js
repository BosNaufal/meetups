import React from 'react'
import styled from '@emotion/styled'

const CategoryItem = ({
  title,
  count,
  isChecked,
}) => {
  return (
    <CategoryItemWrapper>
      <input 
        type="checkbox" 
        checked={isChecked} 
      />
      <label>{title} ({count})</label>
    </CategoryItemWrapper>
  );
}

export default CategoryItem;


const CategoryItemWrapper = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  input {
    margin-right: 8px;
  }
`
