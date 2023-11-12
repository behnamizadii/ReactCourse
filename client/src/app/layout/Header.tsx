import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const midlinks = [
  { title: 'catalog', path: '/catalog' },
  { title: 'about', path: '/about' },
  { title: 'contact', path: '/contact' }
]

const rightLinks = [
  { title: 'login', path: '/login' },
  { title: 'register', path: '/register' }
]

const navLinkStyle = {
  color: 'inherit',
  typography: 'h6',
  textdecoration: 'none',
  '&:hover': {
    color: 'grey.500'
  },
  '&.active': {
    color: 'text.secondary'
  }
}


interface Props {
  darkMode: boolean;
  handleChange: () => void;
}

export default function Header({ darkMode, handleChange }: Props) {
  return (
    <AppBar position='static' sx={{ mb: 4 }}>
      {/* // check the app bar api in material ui for more on what is sx and mb */}
      <Toolbar sx={{ justifyContent: 'space-between', display: 'flex', alignItems: 'center' }}>
        <Box display='flex' alignItems='center'>
          <Typography
            variant='h6'
            component={NavLink}
            to='/'
            sx={navLinkStyle}>
            RE-STORE
          </Typography>
          <Switch
            checked={darkMode}
            onChange={handleChange} />
        </Box>

        <List sx={{ display: 'flex' }}>
          {midlinks.map(({ title, path }) => (
            <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={navLinkStyle}
            >
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>

        <Box display='flex' alignItems='center'>
          <IconButton size='large' edge='start' color='inherit' sx={{ mr: 2 }}>
            <Badge badgeContent='4' color='secondary'>
              <ShoppingCart />
            </Badge>
          </IconButton>

          <List sx={{ display: 'flex' }}>
            {rightLinks.map(({ title, path }) => (
              <ListItem
                component={NavLink}
                to={path}
                key={path}
                sx={navLinkStyle}
              >
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>

      </Toolbar>
    </AppBar>
  )
}