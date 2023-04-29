import { useEffect } from "react";



export default function mole(){
    useEffect(()=>{
        let randMills=math.ceil(math.random() * RAND_DEFAULT+ RAND_MINIUM) 
      let timer=setTimeout(()=>{
          setIsShowing(true)
      },randMills)
      return ()=>clearTimeout(timer)
  
  })
return(
    <div>
        <img src={mole} alt="" />
    </div>
)
}