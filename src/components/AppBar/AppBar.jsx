import AppBar from "@mui/material/AppBar";
import BarChartIcon from "@mui/icons-material/BarChart";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const CustomAppBar=()=>{
  return(

    <AppBar position="relative">
        <Toolbar>
          <BarChartIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            CoinGecko Market Pairs (USD)
          </Typography>
        </Toolbar>
      </AppBar>
  )
}
export default CustomAppBar