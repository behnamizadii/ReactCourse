import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const midlinks = [
  {title: 'catalog', path: '/catalog'},
  {title: 'about', path:'/about'},
  {title: 'contact', path:'/contact'}
]

const rightLinks = [
  {title: 'login', path: '/login'},
  {title: 'register', path:'/register'}
]


interface Props{
  darkMode: boolean;
  handleChange: ()=> void;
}

export default function Header({darkMode, handleChange}: Props) {
  return(
    <AppBar position='static' sx={{mb: 4}}> 
    {/* // check the app bar api in material ui for more on what is sx and mb */}
      <Toolbar>
        <Typography variant="h6" component={NavLink} to={'/'}
        sx={{color:'inherit', textDecoration:'none'}}>
          ReStore
        </Typography>
        <Switch 
        checked={darkMode}
        onChange={handleChange} />
        <List sx={{display: 'flex'}}>
          {midlinks.map(({title, path})=>(
            <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={{color:'inherit', typography:'h6'}}
            >
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>

        <IconButton size='large' edge='start' color='inherit' sx={{mr:2 }}>
            <Badge badgeContent='4' color='secondary'>
              <ShoppingCart />
            </Badge>
        </IconButton>

        <List sx={{display: 'flex'}}>
          {rightLinks.map(({title, path})=>(
            <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={{color:'inherit', typography:'h6'}}
            >
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  )
}