import * as React from "react";
import CardList from "./components/CardList/CardList";
 import {
   useQuery,
 } from 'react-query'
import { getCards } from "./api/service/card";
import Loader from "./components/Loader/Loader";
import Layout from "./components/MainLayout/MainLayout";

import { Route ,Routes,useNavigate,useParams} from "react-router-dom";
import CustomCard from "./components/Card/Card";


export default function Album() {
const {isLoading,data} = useQuery('cards',()=>getCards() )
const [card,setCard]=React.useState()
const navigate=useNavigate()

const buttonClick=(e)=>{
 const card=data.filter(i=>i.symbol===e.currentTarget.id)
setCard(card[0])
navigate(`/currency/${card[0].symbol}`)
}
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path="/" element={ isLoading ? <Loader/>:<CardList cards={data} buttonClick={buttonClick}/>}/>
      <Route path="/currency/:cardSymbol"  element={<CustomCard more card={card}/>}/>
      </Route>
    </Routes>
    
         
        
  );
}
