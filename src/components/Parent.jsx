import React, { useContext } from 'react'
import Childe from './Childe'

export default function Parent() {
    
  return (
    <Childe score={"7-0"} home={"Liverpool"} away={"Manchester United"}/>

  )
}

function RenderTeam(name , i){
    return(
        <div>
            {i + 1}: {name}
        </div>
    );
}