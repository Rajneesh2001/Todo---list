import React,{useEffect, useState} from 'react';
import './style.css';

const localData=()=>{
         
    const list=localStorage.getItem("todo");
    if(list){
        return JSON.parse(list)
    }
    else{
        return[]
    }
}

const Todo = () => {
    const [input,setOutput]=useState("");
    const [store,setStore] =useState(localData);
    const  [edited,setEdited]=useState("");
    const[layout,setLayout]=useState(false);

   
    const addItem=()=>{
        if(!input) 
        {
            alert("please write something!!");
        }
        else if(input&&layout)
        {
            setStore(
                store.map((current)=>{
                if(current.id===edited)
                {
                    console.log("hi");
                    return {...current, name:input}
                }
                return current;
            } )
            )
            setOutput("");
        setEdited(null);
        setLayout(false);
        }
        else{
            
            setOutput("");
            const dataInput= {id:new Date().getTime().toString(),
                    name:input,
                };
                setStore([...store,dataInput]);
                setOutput("");
        }
    }
    const edit=(index)=>{
        const redo=store.find((elem)=>{
          return elem.id===index;
        })
        setOutput(redo.name);
        setEdited(index);
        setLayout(true);
        }
    const deleteElem=(index)=>{
     const update=store.filter((current)=>{
         return current.id !== index;
     })
     setStore(update);
    }
    const removeAll=()=>
    {
     setStore([])
    }
    useEffect(()=>{
        localStorage.setItem("todo",JSON.stringify(store))
    },[store])

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="todologo" />
                        <figcaption>enter your list here 👇</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text"
                            placeholder="✍️ Add Item"
                            className="form-control"
                            value={input}
                            onChange={(event)=>{setOutput(event.target.value)}}
                            />
                            {layout?<i className="far fa-edit add-btn" onClick={addItem}></i> : <i className="fa fa-plus add-btn" onClick={addItem}></i>}
                       
                    </div>
                    <div className="showItems">
                       { store.map((current)=>{
                           return(
                     <div className="eachItem" key={current.id}>
                       <h3>{current.name}</h3>
                       <div className="todo-btn">
                       <i className="far fa-edit add-btn" onClick={()=>{edit(current.id)}}></i>
                       <i className="far fa-trash-alt add-btn" onClick={()=>{deleteElem(current.id)}}></i>
                       </div>
                        </div>
                               
                           )

                       })}
                      

                    </div>
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
                        CHECK LIST
                        </button>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Todo;