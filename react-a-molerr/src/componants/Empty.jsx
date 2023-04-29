import { useEffect } from "react"
const RAND_DEFAULT=5000
const RAND_MINIUM=2000
export default function Empty({setIsShowing}){
useEffect(()=>{
      let randMills=math.ceil(math.random() * RAND_DEFAULT+ RAND_MINIUM) 
    let timer=setTimeout(()=>{
        setIsShowing(true)
    },randMills)
    return ()=>clearTimeout(timer)

})
    return(
    <div>
        <img
        style={{'width' : '30vw'}}
        src={moleHill}/>
        
    </div>
)
}