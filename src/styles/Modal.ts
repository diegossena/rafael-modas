import styled from 'styled-components'
import * as S from '.'
/**
 * ```jsx
 * <Fade isOpen={open} close={close}>
 *  <S.Modal>
 *    <S.ModalHeader>
 *      <S.ModalTitle>{title}</S.ModalTitle>
 *      <S.ModalClose onClick={close}>
 *        <I.CloseIcon />
 *      </S.ModalClose>
 *    </S.ModalHeader>
 *    <S.ModalBody>...</S.ModalBody>
 *    <S.ModalFooter>
 *      <Button onClick={close}>Fechar</Button>
 *    </S.ModalFooter>
 *  <S.Modal/>
 * </Fade>
 * ```
 */
interface IModal {
  'data-anchor'?: 'center' | 'top'
  'data-drawer'?: 'right'
  'data-height-full'?: boolean
  'data-fullscreen'?: boolean
}
export const Modal = styled.div <IModal>`
  display: flex;
  pointer-events: auto;
  z-index: 100;
  flex-direction: column;
  min-width: min(480px, 100vw);
  max-width: 100vw;
  height: auto;
  max-height: 100vh;
  position: fixed;
  border-radius: 6px;
  background-color: #fff;
  transition: .2s ease;
  box-shadow:
    0 0 0 1px hsla(0,0%,100%,.145),
    0px 1px 1px rgba(0,0,0,.02),
    0px 8px 16px -4px rgba(0,0,0,.04),
    0px 24px 32px -8px rgba(0,0,0,.06);
  opacity: 0;
  &[data-status="entered"] {
    opacity: 1;
  }
  &[data-height-full] {
    height: 100vh;
  }
  &[data-fullscreen] {
    inset: 0;
    width: 100vw;
    transform: translateY(100%);
    &[data-status="entered"] {
      transform: translateY(0%);
    }
  }
  &[data-anchor],
  &:not([data-anchor]):not([data-drawer]):not([data-fullscreen]) {
    left: 50%;
    max-height: min(520px, 100vh);
  }
  &[data-anchor="center"],
  &:not([data-anchor]):not([data-drawer]):not([data-fullscreen]) {
    top: 50%;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    transform: scale(.97) translateX(-50%) translateY(-50%);
    &[data-status="entered"] {
      transform: scale(1) translateX(-50%) translateY(-50%);
    }
  }
  &[data-anchor="top"] {
    top: 15%;
    transform: scale(.97) translateX(-50%);
    &[data-status="entered"] {
      transform: scale(1) translateX(-50%);
    }
  }
  &[data-drawer] {
    min-width: min(320px, 100vw);
  }
  &[data-drawer="right"] {
    right: 0;
    top: 0;
    bottom: 0;
    width: 19rem;
    transform: translateX(100%);
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    &[data-status="entered"] {
      transform: translateX(0%);
    }
  }
  @media (max-width: 600px) {
    &[data-anchor],
    &:not([data-anchor]):not([data-drawer]):not([data-fullscreen]) {
      inset: 0;
      top: auto;
      width: 100%;
      height: 80vh;
      transform: translateX(0%) translateY(100%);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      &[data-status="entered"] {
        transform: translateX(0%) translateY(0);
      }
    }
  }
`
export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  font-size: 18px;
  padding: 12px;
  border: 1px solid var(--color-border-primary);
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  border-bottom: 1px solid rgb(225, 228, 232);
  position: relative;
`
export const ModalTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
`
export const ModalClose = styled(S.IconButton)`
  margin-left: auto;
`
export const ModalBody = styled.div`
  height: 100%;
  min-height: 48px;
  min-width: 300px;
  overflow: auto;
  padding: 1rem;
  font-size: 14px;
  b {
    font-weight: 600;
  }
  p {
    margin: .5rem 0;
  }
`
export const ModalWarning = styled.div`
  font-size: 14px;
  color: #24292e;
  background-color: #fffbdd;
  border-width: 1px 0;
  border-color: rgba(176, 136, 0, 0.2);
  padding: 20px 16px;
  border-style: solid;
`
export const ModalFooter = styled.div`
  display: flex;
  justify-content: end;
  gap: .5rem;
  border-top: 1px solid rgb(225, 228, 232);
  padding: 12px;
`
