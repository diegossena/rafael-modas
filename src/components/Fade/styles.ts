import { TransitionStatus } from '../Transition'
import styled from 'styled-components'
export interface IFade {
  'data-status'?: TransitionStatus
}
export const Fade = styled.div<IFade>`
  pointer-events: auto;
  position: fixed;
  inset: 0;
  z-index: 100;
  background-color: #0a0a0a;
  transition: 250ms;
  opacity: 0;
  &[data-status="entered"] {
    opacity: .3;
  }
`
