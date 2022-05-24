import React from "react";
const Todo=()=>{
    const [todos,setTodos]=React.useState([]);
    const [newtodo,setNewtodo]=React.useState("");
    const saveinfo=()=>{
        
       fetch("http://localhost:3004/todos",{
           method:"POST",
           headers:{
               "content-type":"application/json",
           },
           body:JSON.stringify({
               "value":newtodo,
               "isCompleted":false,
           }),
       })
       .then((r)=>r.json())
       .then((d)=>{setTodos([...todos,d]);
                   setNewtodo("");});
        
    };
    React.useEffect(()=>{
        fetch("http://localhost:3004/todos?_page=1")
  .then((r)=>r.json())
  .then((d)=>{
    console.log(d);
    setTodos(d);
  });
    },[]);
    
    return(
        <><h1>Todos</h1>
        <div>
            <div>
            <input value={newtodo} onChange={(e)=>setNewtodo(e.target.value)}/>
            <button onClick={saveinfo}>+</button>
            </div>
            {todos.map((item)=>(
                <div key={item.id}>{item.value}</div>
            )

            )}
        </div>
        </>
    );
};
export default Todo;