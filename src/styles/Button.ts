import styled from 'styled-components'
export interface IBaseButton {
  as?: any
  'data-color'?: 'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'black'
  'data-variant'?: 'text' | 'contained' | 'outlined' | '3d'
  'data-size'?: 'small' | 'medium' | 'large'
}
export const BaseButton = styled.button<IBaseButton>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;
  gap: 8px;
  flex: 0 0 auto;
  user-select: none;
  font-size: inherit;
  overflow: visible;
  &::before {
    content: '';
    display: block;
    position: absolute;
    opacity: 0;
    transition-duration: 0.15s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: -1;
    box-sizing: border-box;
    transform: scale(0);
    transition-property: transform, opacity;
    background-color: #f6f7f8;
    border: none;
    box-shadow: none;
  }
  &:hover::before {
    opacity: 1;
    transform: scale(1);
  }
  &:disabled {
    pointer-events: none;
    background-color: transparent;
    color: rgba(0, 0, 0, 0.26);
  }
  color: inherit;
  background-color: transparent;
  border-width: 1px;
  border-color: #d9dee2;
  border-style: solid;
  &:hover {
    border-color: #cad0d8;
  }
  &[data-variant="text"] {
    border-width: 0px;
  }
  &[data-variant="contained"] {
    background-color: #d9dee2;
    &[data-color] {
      color: #fff;
    }
  }
  &[data-color="black"] {
    border-color: #171717e6;
    &[data-variant="contained"] {
      background-color: #171717;
      &::before {
        background-color: rgba(255, 255, 255, .1);
      }
    }
  }
  &[data-color="primary"] {
    border-color: #0062cc;
    color: #1976d2;
    &::before {
      background-color: rgba(25, 118, 210, 0.04);
    }
    &[data-variant="contained"] {
      background-color: #0069d9;
      &::before {
        background-color: #1565c0;
      }
    }
  }
  &[data-color="secondary"] {
    border-color: rgba(156, 39, 176, 0.5);
    color: #9c27b0;
    &::before {
      background-color: rgba(156, 39, 176, 0.04);
    }
    &[data-variant="contained"] {
      background-color: #9c27b0;
      &::before {
        background-color: #7b1fa2;
      }
    }
  }
  &[data-color="success"] {
    color: #2e7d32;
    &::before {
      background-color: rgba(46, 125, 50, 0.04);
    }
    &[data-variant="contained"] {
      background-color: #2e7d32;
      &::before {
        background-color: #1b5e20;
      }
    }
  }
  &[data-color="warning"] {
    color: #ffa726;
    border-color: rgba(255, 167, 38, 0.5);
    &:hover {
      border-color: #ffa726;
    }
    &::before {
      background-color: rgba(255, 167, 38, 0.08);
    }
    &[data-variant="contained"] {
      background-color: #ffa726;
      &::before {
        background-color: #f57c00;
      }
    }
  }
  &[data-color="error"] {
    color: #d32f2f;
    border-color: rgba(211, 47, 47, 0.5);
    &::before {
      background-color: rgba(211, 47, 47, 0.04);
    }
    &[data-variant="contained"] {
      background-color: #d32f2f;
      &::before {
        background-color: #c62828;
      }
    }
  }
`
interface IButton {
  'data-fullwidth'?: boolean
}
export const Button = styled(BaseButton) <IButton>`
  letter-spacing: 0.02857em;
  font-weight: 500;
  letter-spacing: 0.02857em;
  border-radius: 4px;
  // data-size
  &[data-size="inherit"] {
    font-size: inherit;
    padding: .8rem;
  }
  &[data-size="small"] {
    font-size: .8125rem;
    padding: 8px 10px;
  }
  &[data-size="medium"], &:not([data-size]) {
    font-size: .875rem;
    padding: 10px 16px;
    & > svg {
      font-size: 1rem;
    }
  }
  &[data-size="large"] {
    font-size: .9375rem;
    padding: 12px 22px;
  }
  &[data-fullwidth="true"] {
    width: 100%;
    justify-content: center;
  }
  transition: background-color 250ms
    cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  & > svg {
    &:last-child {
      font-size: 20px;
    }
    &:first-child {
      font-size: 20px;
    }
  }
  &:disabled, &[aria-disabled="true"] {
    cursor: default;
    box-shadow: none;
    pointer-events: none;
    opacity: .65;
  }
`
export interface IIconButton {
  'data-rounded'?: boolean
}
export const IconButton = styled(BaseButton) <IIconButton>`
  justify-content: center;

  border-radius: 50%;
  &:before {
    border-radius: 50%;
  }
  &[data-rounded],
  &[data-rounded]::before {
    border-radius: 12px;
  }

  padding: 5px;
  font-size: 1.125rem;
  min-height: 32px;
  min-width: 32px;
  &[data-size="medium"] {
    padding: 6px;
    margin: 6px;
  }
  &[data-size="large"] {
    padding: 12px;
  }
`
