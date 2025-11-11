import { createSlice } from '@reduxjs/toolkit'

const carrinhoSlice = createSlice({
  name: 'Carrinho',
  inicialState: { value: 0 },
  reducers: {
    addCarrinho: (state) => {}
  }
})

// function adicionarAoCarrinho(produto: Produto) {
//   if (carrinho.find((p) => p.id === produto.id)) {
//     alert('Item já adicionado')
//   } else {
//     setCarrinho([...carrinho, produto])
//   }
// }
