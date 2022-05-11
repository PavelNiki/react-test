import CustomCard from "../Card/Card";
import Grid from "@mui/material/Grid";
const CardList=({cards,buttonClick})=>{
  return(

 <Grid container spacing={4}>
            { cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <CustomCard card={card} buttonClick={buttonClick}/>
              </Grid>
            ))}
          </Grid>
  )
}
export default CardList