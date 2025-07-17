import Fade from 'components/Fade'
import React from 'react'
import items from 'items.json'
import * as I from 'components/Icons'
import * as S from './styles'
// types
export type item_t = typeof items[0]
interface Props {
  show: boolean
  items: item_t[]
  setItems: React.Dispatch<React.SetStateAction<item_t[]>>
  close(): void
}
// component
export const CartModal: React.FC<Props> = props => {
  const { setItems } = props
  // render
  return (
    <Fade show={props.show} close={props.close}>
      <S.Modal>
        <S.ModalHeader>
          <S.ModalTitle>Carrinho</S.ModalTitle>
          <S.ModalClose onClick={props.close}>
            <I.CloseIcon />
          </S.ModalClose>
        </S.ModalHeader>
        <S.Body>
          {props.items.map((item, i) => (
            <S.Item key={i}>
              <img src={item.image} width="100px" height="100px" />
              <S.Description>
                <span><b>{item.image}</b></span>
                <span>{item.price.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL'
                })}</span>
                <S.Options>
                  <S.Button
                    data-color="success"
                    onClick={() => setItems([...props.items, item])}
                  >Adicionar</S.Button>
                  <S.Button
                    data-color="error"
                    onClick={() => {
                      setItems(props.items.filter((_, item_i) => item_i !== i))
                    }}
                  >Remover</S.Button>
                </S.Options>
              </S.Description>
            </S.Item>
          ))}
        </S.Body>
        <S.ModalFooter>
          <S.Button onClick={() => setItems([])}>Limpar</S.Button>
          <S.Button
            data-variant="contained"
            data-color="primary"
            onClick={() => {
              const currency_options: Intl.NumberFormatOptions = {
                style: 'currency',
                currency: 'BRL'
              }
              let message = ''
              let sum = 0
              props.items.map((item, i) => {
                const price = item.price.toLocaleString('pt-br', currency_options)
                message += (i ? '%0a' : '')
                  + `${i + 1} | ${item.image} | ${price}`
                sum += item.price
              })
              message = `Pedidos: ${props.items.length}%0a`
                + `Valor Total: ${sum.toLocaleString('pt-br', currency_options)}%0a`
                + message
              window.open(`https://wa.me/5571996193878?text=${message}`)
            }}
          >Enviar Pedido</S.Button>
        </S.ModalFooter>
      </S.Modal>
    </Fade>
  )
}