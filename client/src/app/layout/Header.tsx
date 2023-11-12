import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

const midlinks = [
  {title: 'catalog', path: '/catalog'},
  {title}
]

// https://www.udemy.com/course/learn-to-build-an-e-commerce-store-with-dotnet-react-redux/learn/lecture/28964944#overview
// 1:44
// course

interface Props{
  darkMode: boolean;
  handleChange: ()=> void;
}

export default function Header({darkMode, handleChange}: Props) {
  return(
    <AppBar position='static' sx={{mb: 4}}> 
    {/* // check the app bar api in material ui for more on what is sx and mb */}
      <Toolbar>
        <Typography variant="h6">
          ReStore
        </Typography>
        <Switch 
        checked={darkMode}
        onChange={handleChange} />
      </Toolbar>
    </AppBar>
  )
}