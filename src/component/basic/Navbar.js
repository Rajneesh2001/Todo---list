import React from 'react'

function Navbar({filter,plop}) {
  
  return (
    <>
      <nav className="navbar">
       <div className="btn-group">
       {plop.map((rustom)=>{
           return (
               <>
                 <button className="btn-group__item"
           onClick={()=>filter(rustom)}>{rustom}</button>
           </>
           )
       })}
        
         
      </div>
      </nav>
    </>
  )
}

export default Navbar