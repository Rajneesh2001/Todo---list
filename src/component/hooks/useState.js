import React,{useState} from 'react'
import  './style.css';
function Hooks() {
   const[current,setNew] =useState(0)
  return (<>
    <div className="center_div">
   <p> {current}</p>
   <div class="button2" onClick={()=>{setNew(current+1)}}>
   <span></span>
   <span></span>
   <span></span>
    INC
   </div>
   <div class="button2"onClick={()=> current!=0?setNew(current-1):setNew(0)}>
   <span></span>
   <span></span>
   <span></span>
   DEC
   </div>
    </div>
  </>
  )
}

export default Hooks