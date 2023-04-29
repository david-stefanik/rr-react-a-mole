import Mole from "./Mole"
import Empty from "./Empty"
import { useState } from "react"


export default function MoleContiainer({setScore,setScore}){
   let [isShowing,setIsShowing]=useState(false)
const onMoleClick=e=>{
    if(isShowing){
        setScore(score+1)
        setIsShowing(false)
    }
}


    return(
    <div className="MoleContainer">
        {
          isShowing ?
          <mole setIsShowing={setIsShowing} />
          :
          <empty setIsShowing={setIsShowing} />  
        }
    </div>  

   ) 
}