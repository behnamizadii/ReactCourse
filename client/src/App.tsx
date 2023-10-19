const products = [
  {name: 'product1', price: 100.00},
  {name: 'product2', price: 200.00},
  {name: 'product3', price: 300.00},
  {name: 'product3', price: 300.00},
]

function App() {

  return (
    <div>
      <h1>ReStore</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name} - {product.price}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
