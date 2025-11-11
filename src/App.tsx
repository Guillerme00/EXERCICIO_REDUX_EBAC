import { useEffect, useState } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { Produto } from './types/produto'

import { GlobalStyle } from './styles'

function App() {
  const [produtos, setProdutos] = useState<Produto[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => setProdutos(res))
  }, [])

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos produtos={produtos} />
      </div>
    </>
  )
}

export default App
