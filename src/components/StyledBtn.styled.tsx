import styled from 'styled-components';
import { css } from 'styled-components';
// import { MyAnimation } from './styles/animations/Animations';

type StyleBtnPropsType = {
  color?: string
  fontSize?: string
  btnType: 'primary' | 'outlined'
  active?: boolean
}

export const StyledBtn = styled.button<StyleBtnPropsType>`
  border: none;
  border-radius: 10px;
  /* background-color: #fb3f78; */
  /* background-color: ${props => props.color || '#fb3f78'}; */
  padding: 10px 20px;
  /* color: snow; */
  font-size: ${props => props.fontSize || '2rem'};
  font-weight: bold;

  ${props => props.btnType === 'outlined' && css<StyleBtnPropsType>`
    border: 2px solid ${props => props.color || '#fb3f78'};
    color: ${props => props.color || '#fb3f78'};
    background-color: transparent;

    &:hover {
      border-color: #4053cc;
      color: #4053cc;
      background-color: transparent;
    }
  `}
  
  ${props => props.btnType === 'primary' && css<StyleBtnPropsType>`
    background-color: ${props => props.color || '#fb3f78'};
    color: snow;

    &:hover {
      background-color: #4053cc;
    }
  `}

  ${props => props.active && css<StyleBtnPropsType>`
    box-shadow: 5px 5px 5px 5px #1513146d
  `}
  /* &:last-child {
    background-color: #3f7899;
  } */
`

// export const SuperButton = styled(StyledBtn)`
//   color: black;
//   border-radius: 5px;
//   background-color: yellow;

//   &:hover {
//     animation: ${MyAnimation} 2s ease-in-out infinite;
//   }
// `