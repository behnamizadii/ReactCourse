import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

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