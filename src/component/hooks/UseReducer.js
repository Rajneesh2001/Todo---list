import React,{useReducer} from 'react'
import './style.css';

const reducer=(state,dispatch)=>{
if(dispatch.type==="INC")
{
    state+=1;
}
if(state>0 && dispatch.type==="DEC")
{
    state-=1;
}
return state;
}
const UseReducer = () => {
    const[state,dispatch]=useReducer(reducer,0)
  return (
    <>
    <div className="center_div">
   <p> {state}</p>
   <div class="button2" onClick={()=>{dispatch({type:'INC'})}}>
   <span></span>
   <span></span>
   <span></span>
    INC
   </div>
   <div class="button2"onClick={()=>{dispatch({type:'DEC'})}}>
   <span></span>
   <span></span>
   <span></span>
   DEC
   </div>
    </div>
  </>
  )
}

export default UseReducer