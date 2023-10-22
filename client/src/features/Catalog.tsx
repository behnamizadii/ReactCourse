import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Product } from "../app/models/product"

interface Props {
  products: Product[];
  addProduct: () => void;
}

export default function Catalog({products, addProduct}: Props) { // this is called destructuring you can specify what you want instead of props: Props which imports everything
  return (
    <>
    <List>
        {products.map(product => ( //by destructuring here I don't even need props.products I can just use 'products'
          <ListItem key={product.id}>
            <ListItemAvatar>
              <Avatar src={product.pictureUrl} />
            </ListItemAvatar>
            <ListItemText>{product.name} - {product.price}</ListItemText>
          </ListItem>
        ))}
      </List>
      <Button variant="contained" onClick={addProduct}>Add Product</Button>
      </>
  )
}