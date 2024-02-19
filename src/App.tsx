import React from 'react';
import styled from 'styled-components';
import './App.css';
import { Link } from './components/Link.styled';
import { Menu } from './components/Menu.styled';
import { StyledBtn } from './components/StyledBtn.styled';
import { colorTheme } from './components/styles/Theme.styled';

function App() {
  return (
    <div>
      {/* <Menu>
        <ul>
          <li><a href="">menu item 1</a></li>
          <li><a href="">menu item 2</a></li>
          <li><a href="">menu item 3</a></li>
        </ul>
      </Menu> */}
      <Box>
        {/* <StyledBtn as={Link} href={'#'}>LinkComponent</StyledBtn> */}
        {/* <StyledBtn as="a" href={'#'}>Link</StyledBtn> */}
        {/* <SuperButton>Super button</SuperButton> */}

        {/* <StyledBtn color={'blue'} fontSize={'20px'}>Hello</StyledBtn>
        <StyledBtn color={'green'}>Hello</StyledBtn>
        <StyledBtn fontSize={'30px'}>Hello</StyledBtn> */}

        <StyledBtn color={colorTheme.colors.primary} btnType={'primary'} active>Hi</StyledBtn>
        <h1>      Yo yo</h1>
        <StyledBtn color={colorTheme.colors.secondary} btnType={'outlined'}>Hello</StyledBtn>

        {/* <input type="text" />
        <input type="submit" />
        <input type="radio" /> */}
      </Box>
    </div>
  );
}

export default App;

const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }

  @media ${colorTheme.media.tablet} {
    flex-direction: column;
  }
`