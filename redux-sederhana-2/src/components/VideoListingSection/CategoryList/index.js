import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import CategoryItem from './CategoryItem'

const CategoryList = () => {
  return (
    <Wrapper>
      <Header>Categories</Header>
      <ListWrapper>
        <CategoryItem 
          title="Coffe"
          count={1}
        />
        <CategoryItem 
          title="Nature"
          count={1}
        />
        <CategoryItem 
          title="Punk"
          count={1}
        />
      </ListWrapper>
    </Wrapper>
  );
}

export default CategoryList;


const Wrapper = styled.div`
  display: block;
  min-width: 135px;
  padding: 0 16px;
`

const Header = styled.h3`
  font-weight: 700;
  margin: 0;
  margin-bottom: 8px;
`

const ListWrapper = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
`
