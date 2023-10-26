import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

export default function ProductList({products}: Props) { // this is called destructuring you can specify what you want instead of props
  return(
    <Grid container spacing={4}>
        {products.map(product => ( //by destructuring here I don't even need props.products I can just use 'products'
        <Grid item xs={3}>
          <ProductCard key={product.id} product={product} />
        </Grid>
        ))}
    </Grid>
  )
}