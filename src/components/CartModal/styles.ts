import styled from 'styled-components'
export * from 'styles'
import { ModalBody } from 'styles/Modal'

export const Body = styled(ModalBody)`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`
export const Item = styled.div`
  display: flex;
  gap: .5rem;
  img {
    border-radius: 8px;
  }
`
export const Description = styled.div`
  display: flex;
  flex-direction: column;
`
export const Options = styled.div`
  margin-top: auto;
  display: flex;
  gap: .5rem;
`