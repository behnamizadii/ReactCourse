import Catalog from "../../features/catalog/Catalog"
import { CssBaseline, Container } from "@mui/material"
import Header from "./Header"

function App() {
  return (
    <div>
      {/* this helps the header to be edge to edge without any margin or paddings */}
      <CssBaseline />  
      <Header />
      <Container>
        <Catalog />
      </Container>
      
    </div>
  )
}

export default App
// react hooks are to create component state