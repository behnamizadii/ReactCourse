import { useEffect, useState } from "react"
import { Product } from "../models/product"
import Catalog from "../../features/catalog/Catalog"
import { Typography } from "@mui/material"

function App() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, []) // this empty array is important it prevents this call from being rerendered over and over again...
  // forgetting it will lead to an endless loop calls to the server

  function addProduct(){
    setProducts(prevState => [...prevState, {
      id: prevState.length +1,
      name: 'product' + (prevState.length + 1), 
      price:(prevState.length*2),
      brand: 'some brand name',
      description: 'some description',
      pictureUrl: 'http://picsum.photo/200'
    }])
  }
  return (
    <div>
      <Typography variant="h1">ReStore</Typography>
      <Catalog products = {products} addProduct = {addProduct}/>
    </div>
  )
}

export default App
// react hooks are to create component state