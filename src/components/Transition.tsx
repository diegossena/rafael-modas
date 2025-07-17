import React from 'react'

export type TransitionStatus = "entering" | "entered" | "exiting" | "exited"
export interface TransitionProps {
  in: boolean
  timeout: number | { enter?: number; exit?: number }
  children: React.ReactNode | ((status: TransitionStatus, delay: number) => React.ReactNode)
  unmountOnExit?: boolean
}
export const Transition: React.FC<TransitionProps> = props => {
  const { children, unmountOnExit } = props
  // states
  const [status, setStatus] = React.useState<TransitionStatus>("exited")
  // callbacks
  const entered_call = React.useCallback(() => setStatus('entered'), [])
  const exited_call = React.useCallback(() => setStatus('exited'), [])
  // memos
  const timeout = React.useMemo(() => {
    let exit = 0, enter = 0
    switch (typeof props.timeout) {
      case 'number':
        exit = enter = props.timeout
        break
      case 'object':
        exit = Object.hasOwn(props.timeout, 'exit') ? props.timeout.exit : 0
        enter = Object.hasOwn(props.timeout, 'enter') ? props.timeout.enter : 0
        break
    }
    return { exit, enter }
  }, [props.timeout])
  const delay = React.useMemo(() => {
    switch (status) {
      case 'entering':
      case 'entered':
        return timeout.enter
      case 'exiting':
      case 'exited':
      default:
        return timeout.exit
    }
  }, [status, timeout])
  React.useMemo(() => {
    if (props.in) {
      switch (status) {
        case 'exited':
          setStatus('entering')
          break
        case 'entering':
          setTimeout(entered_call, timeout.enter)
          break
      }
    } else {
      switch (status) {
        case 'entered':
          setStatus('exiting')
          break
        case 'exiting':
          setTimeout(exited_call, timeout.exit)
          break
      }
    }
  }, [status, timeout, props.in])
  // render
  if (unmountOnExit && status === 'exited')
    return null
  return typeof children === 'function'
    ? children(status, delay)
    : children as any
}
export default Transition
