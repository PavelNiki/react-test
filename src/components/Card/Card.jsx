import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import {  useNavigate } from 'react-router-dom';


const CustomCard = ({card,more,buttonClick}) => {
  
  const {name,current_price,high_24h,ath,low_24h,image,id,market_cup,market_cap_rank,symbol}=card
  const navigate=useNavigate()
  const handleClick=()=>{
        navigate('/')
  }
  return(

  <Card
    sx={{
      height: `${more ? '50%':'100%'}`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent:'center'
      
    }}
    id={id}
  >
    <CardMedia
      component='img'
      image={image}
      alt='random'
      height='100%'
      
      
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant='h5' component='h2'>
        {name}
      </Typography>

        <ul>
          <li>
      <Typography>
            {`Current Price:${current_price}`}
      </Typography>
            </li>
{more ? <>
<li>
      <Typography>
            {`All time high price: ${ath}`}
      </Typography>
            </li>
<li>
      <Typography>
            {`Market Cap: ${market_cup || 'not found info'}`}
      </Typography>
            </li>
          <li>
      <Typography>
            {` Market Cap Rank:${market_cap_rank || 'not found info'}`}
      </Typography>
            </li>

</> :<>
<li>
      <Typography>
            {`24h High: ${high_24h}`}
      </Typography>
            </li>
          <li>
      <Typography>
            {`24h Low:${low_24h}`}
      </Typography>
            </li>
</>}
          
        </ul>
    </CardContent>
    <CardActions>
          {more ? <Button size='small' onClick={handleClick}>Back</Button>:
          <Button size='small' onClick={buttonClick} id={symbol}>More</Button>}
    </CardActions>
  </Card>
  )
};
export default CustomCard;
