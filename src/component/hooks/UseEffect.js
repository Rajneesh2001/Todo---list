import React,{useState,useEffect} from 'react'
import  './style.css';
function UseEffect() {
   const[current,setNew] =useState(1)
   useEffect(()=>{
       document.title=`chat(${current})`;
       
   },[current])
  return (<>
    <div className="center_div">
   <p> {current}</p>
   <div class="button2" onClick={()=>{setNew(current+1)}}>
   <span></span>
   <span></span>
   <span></span>
    INC
   </div>
   
    </div>
  </>
  )
}

export default UseEffect;