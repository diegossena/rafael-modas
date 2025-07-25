import React from 'react'
import { NextPage } from 'next'
import * as S from 'styles'
import items from 'items.json'
import * as I from 'components/Icons'
import { CartModal, item_t } from 'components/CartModal'
// page
export const IndexPage: NextPage = () => {
  // states
  const [cart, setCart] = React.useState<item_t[]>([])
  const [filter, setFilter] = React.useState('')
  const [cartModal, setCartModal] = React.useState(false)
  // render
  return (
    <>
      <S.Header>
        <h1>Rafinha Modas</h1>
        <S.Input
          id="search"
          placeholder="Pesquisar..."
          onChange={({ target }) => setFilter(target.value)}
        />
      </S.Header>
      <S.Cards>
        {items
          .map((item, i) => (
            <S.Card key={i} hidden={!item.image.match(filter)}>
              <h3>{item.image}</h3>
              <span>{item.price.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL'
              })}</span>
              <img src={item.image} height="200px" width="200px" />
              <S.Button
                data-variant="contained"
                data-color="success"
                onClick={() => setCart([...cart, item])}
              >
                Adicionar
              </S.Button>
            </S.Card>
          ))}
      </S.Cards>
      <S.CartButton
        data-variant="contained"
        data-color="warning"
        data-size="large"
        onClick={() => setCartModal(true)}
      >
        <span>{cart.length}</span>
        <I.CiShoppingCart />
      </S.CartButton>
      <CartModal
        show={cartModal}
        close={() => setCartModal(false)}
        items={cart}
        setItems={setCart}
      />
    </>
  )
}
export default IndexPage