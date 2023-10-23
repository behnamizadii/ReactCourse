import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

export default function ProductList({products}: Props) { // this is called destructuring you can specify what you want instead of props
  return(
    <List>
        {products.map(product => ( //by destructuring here I don't even need props.products I can just use 'products'
          <ProductCard key={product.id} product={product} />
        ))}
      </List>
  )
}