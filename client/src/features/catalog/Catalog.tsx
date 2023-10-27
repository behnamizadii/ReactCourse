import { Product } from "../../app/models/product"
import ProductList from "./ProductList";
import { useState, useEffect } from "react";

export default function Catalog() { // this is called destructuring you can specify what you want instead of props: Props which imports everything
    const [products, setProducts] = useState<Product[]>([])
  
    useEffect(() => {
      fetch('http://localhost:5000/api/products')
        .then(response => response.json())
        .then(data => setProducts(data))
    }, []) // this empty array is important it prevents this call from being rerendered over and over again...
    // forgetting it will lead to an endless loop calls to the server
  
  return (
    <>
      <ProductList products={products} />
      </>
  )
}