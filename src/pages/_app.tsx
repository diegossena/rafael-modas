import React from 'react'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import GlobalStyle from 'styles'
// component
const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  // render
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}
export default App
