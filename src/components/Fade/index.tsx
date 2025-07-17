import React, { KeyboardEvent } from 'react'
import ReactDOM from 'react-dom'
import { Transition, TransitionProps } from '../Transition'
import * as S from './styles'
// types
export interface Props {
  show: boolean
  close: () => void
  children: TransitionProps['children']
}
// consts
const delay = 250
const timeout = { exit: delay }
let fade_counter = 0
// component
const Fade: React.FC<Props> = props => {
  const { show, close, children } = props
  // effects
  React.useEffect(() => {
    if (show) {
      const fade_id = ++fade_counter
      function onkeydown(event: globalThis.KeyboardEvent) {
        if (fade_counter === fade_id && event.key === 'Escape') {
          close()
        }
      }
      if (fade_id === 1) {
        document.body.style.overflow = 'hidden'
      }
      window.addEventListener('keydown', onkeydown)
      return () => {
        window.removeEventListener('keydown', onkeydown)
        if (fade_id === 1) {
          document.body.removeAttribute('style')
        }
        --fade_counter
      }
    }
  }, [show])
  // render
  if (!globalThis.document?.body)
    return null
  return (
    <Transition in={show} timeout={timeout} unmountOnExit>
      {status => ReactDOM.createPortal(
        <>
          <S.Fade data-status={status} onClick={close} />
          {typeof children === 'function'
            ? children(status, delay)
            : React.isValidElement(children)
              ? React.cloneElement<any>(children, { 'data-status': status })
              : children}
        </>,
        document.body
      )}
    </Transition>
  )
}
export default Fade
