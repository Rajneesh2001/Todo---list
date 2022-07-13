import React from 'react'

const MenuPack=({nani})=>{
  
  return (
      <>
      <section className="main-card--cointainer">
         { nani.map((simple) =>{
           const {id,name,category,price,description,image}=simple;
              return (
                  <>
                  <div className="card-container"key={id}>
              <div className="card">
                  <div className="card-body">
                  <span className="card-number card-circle subtle">{id}</span>
                  <span className="subtle card-author" >{category}</span>
                  <h2 className="card-title">{name}</h2>
                  <img src={image} alt="no-amage" className="card-media"/>
                  <span className="card-description subtle">lorem ipsum dolor sit whnsdclksn dsjvnsvnklnlkslcjljvsjdlfjdljxlkb  jb</span>
                  <div className="card-read">Read</div>
                </div>
              </div>
          </div>
     </>
              )
              })
            }
             </section>
            </>
              
          )
         
  
}

export default MenuPack;