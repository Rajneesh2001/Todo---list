import React, { useState } from 'react';
import Navbar from './Navbar';
import Api from './Api';
import "./style1.css";
import MenuPack from './MenuPack';
const uniqueData=[...new Set(Api.map((rustom)=>{
   return rustom.category;
})
),"ALL"]

const Restaurant = () => {
   
   const [current,setNext]= useState(Api)  
   const[list,newList]=useState(uniqueData);                  
   const filterOut=(category)=>{
      if(category==="ALL")
      return setNext(Api);
      const updateData=Api.filter((simple)=>{
      return simple.category===category;
   })
   setNext(updateData);
}
   
    return (<>
     <Navbar filter={filterOut} plop={list} />
       <MenuPack nani={current}/>
    </>
    )
}
export default Restaurant;