import Catalog from "../../features/catalog/Catalog"
import { CssBaseline, Container, createTheme, ThemeProvider } from "@mui/material"
import Header from "./Header"
import { useState } from "react"

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType
    }
  })

  function handleChange(){
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      {/* this helps the header to be edge to edge without any margin or paddings */}
      <CssBaseline />  
      <Header darkMode={darkMode} handleChange={handleChange} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  )
}

export default App
// react hooks are to create component state