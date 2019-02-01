import * as React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  margin: 0px;
  background-color: #345374;
`

const Title = styled.h1`
`

const MenuContainer = styled.div`
  width: 100%;
`

const MenuItem = styled.button`

`

interface HeaderProps {
  title: string;
}

const Header = (props: HeaderProps) => (
  <Container>
    <Title>{props.title}</Title>
    <MenuContainer>
      <MenuItem>Profile</MenuItem>
      <MenuItem>Blog</MenuItem>
    </MenuContainer>
  </Container>
)

export default Header
