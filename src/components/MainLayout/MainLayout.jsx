import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import CustomAppBar from "../AppBar/AppBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
const theme = createTheme();

const Layout=()=>{
    return(
<ThemeProvider theme={theme}>
      <CssBaseline />
      <CustomAppBar/>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Market Pairs (USD)
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              The following is a list of crypto currencies with information
              related to the USD trading pair.
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 6,display:'flex',justifyContent:'center'}} maxWidth="lg">
            <Outlet/>
        </Container>
        
      </main>
      <Footer/>
    </ThemeProvider>
    )
}
export default Layout