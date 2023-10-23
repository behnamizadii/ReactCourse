import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";
import { Product } from "../../app/models/product";

interface Props {
  product: Product;
}

export default function ProductCard({product}: Props) { // this is called destructuring you can specify what you want instead of props
  return(
    <ListItem key={product.id}>
    <ListItemAvatar>
      <Avatar src={product.pictureUrl} />
    </ListItemAvatar>
    <ListItemText>{product.name} - {product.price}</ListItemText>
  </ListItem>
  )
}