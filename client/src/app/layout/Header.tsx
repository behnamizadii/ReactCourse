import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return(
    <AppBar position='static' sx={{mb: 4}}> 
    {/* // check the app bar api in material ui for more on what is sx and mb */}
      <Toolbar>
        <Typography variant="h6">
          ReStore
        </Typography>
      </Toolbar>
    </AppBar>
  )
}