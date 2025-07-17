import styled, { createGlobalStyle } from 'styled-components'
import { IconButton } from './Button'
export * from './Button'
export * from './Modal'

const devices = {
  // Small devices (landscape phones, 576px and up)
  small: '(min-width: 576px)',
  // Medium devices (tablets, 768px and up)
  medium: '(min-width: 768px)',
  // Large devices (desktops, 992px and up)
  large: '(min-width: 992px)',
}
export const Header = styled.header`
  display: flex;
  gap: .5rem;
  flex-direction: column;
  text-align: center;
  padding: 1rem;
  background-color: rgba(245, 186, 76, 0.95);
  color: #fff;
  h1 {
    flex-shrink: 0;
  }
  @media ${devices.small} {
    flex-direction: row;
    gap: 1rem;
  }
`
export const Cards = styled.div`
  flex: 1;
  display: grid;
  padding: 32px;
  margin: auto;
  color: #333;
  background-color: #fff;
  gap: 48px 20px;
  min-width: 264px;
  @media ${devices.small} {
    min-width: 484px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${devices.medium} {
    min-width: 704px;
    grid-template-columns: repeat(3, 1fr);
  }
   @media ${devices.large} {
    min-width: 924px;
    grid-template-columns: repeat(4, 1fr);
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: .25rem;
  h3 {
    font-size: 1.2rem;
  }
  img {
    border-radius: 8px;
  }
`
export const CartButton = styled(IconButton)`
  position: fixed;
  right: 10px;
  bottom: 10px;
  span {
    position: absolute;
    z-index: 1;
    top: 0px;
    right: -2px;
    background-color: rgb(255, 0, 0);
    color: rgb(255, 255, 255);
    border-radius: 100px;
    --size: .7rem;
    padding: 1px 3px;
    font-size: 0.8125rem;
    font-weight: 500;
    line-height: 1;
  }
`
export const Input = styled.input`
  box-shadow: 0 1px 2px 0 var(--box-shadow-color);
  border-width: 1px;
  border-radius: 8px;
  font-size: 1rem;
  padding: .25rem .75rem;
  width: 100%;
  transition: .15s cubic-bezier(.4,0,.2,1);
  &:focus {
    box-shadow:0 0 0 3px #a1a1a180;
  }
`
export default createGlobalStyle`
  :root {
    color-scheme: light;
  }
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Roboto', system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    border-color: var(--border-color);
    border-style: solid;
    outline: none;
  }
  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: rgb(238, 238, 238);
  }
  *[hidden] { display: none; }
  a {
    color: inherit;
    text-decoration: inherit;
  }
`