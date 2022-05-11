import Grid from "@mui/material/Grid";
import Skeleton from '@mui/material/Skeleton';

const Loader=()=>{
    return(
        <Grid container spacing={4}>
            {Array.from(new Array(45)).map(()=>
              <Grid item  xs={12} sm={6} md={4}>
            <Skeleton variant="rectangular" width={300} height={300}/>
              </Grid>)
            }
            
          </Grid>

    )
}
export default Loader