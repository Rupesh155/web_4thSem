// import React, { useEffect, useState } from "react";
// import "./Todo.css";

// const Todo = () => {
//   const [task, setTask] = useState("");

//   let [index,SetIndex]=useState(null)


//   const [todos, setTodos] = useState(()=>{
//     let data=  localStorage.getItem("key")
//     if(data){
//         return JSON.parse(data)
//     }
//     return []
//   });
//   useEffect(()=>{
//     localStorage.setItem("key",JSON.stringify(todos))

//   },[todos])



//   function edit(index){
//     setTask(todos[index])
//     SetIndex(index)

//   }


//   function handleAorUpdate(){
//     if(task.trim()==""){
//         return;
//     }
//     console.log("helloooooo");
    
//     if(index!==null){
//         let updateDATA=[...todos]
//         updateDATA[index]=task
//         setTodos(updateDATA)
//     }else{
//         setTodos([...todos,task])
//         setTask("")
//     }
    

//   }


//   function d(id){
//    let d= todos.filter((a,b)=>{
//         return id!=b

//     })
//     setTodos(d)

//   }

//   return (
//     <div className="container">
//       <h1>Todo List</h1>

//       <div className="input-box">
//         <input
//           type="text"
//           name="task"
//           value={task}
//           placeholder="Enter a task"
//           onChange={(e)=>setTask(e.target.value)}
  
//         />

// <button onClick={handleAorUpdate}>
//     {index!==null?"update":"Add"}
//     </button>
//       </div>
    

//       <div className="todo-list">
//         {todos.map((todo, id) => (
//           <div className="todo-item" key={index}>
//             <span>{todo}</span>

//             <div className="actions">
//               <button onClick={()=>edit(id)}>
//                 Edit
//               </button>

//               <button  onClick={()=>d(index)}>
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Todo;




// import React, { useReducer, useState } from 'react'

// const Todo = () => {
// //   let [count,SetCount]=  useState(0)
// function reduser(state,action){
//     if(action.type=="inc"){
//         return state+1
//     }
//     return state
// }
//      let [state,disptach]=   useReducer(reduser,0)
//   return (
//     <div>
//         <h2>{state}</h2>
//       <button onClick={()=>disptach({type:"inc"})}>++</button>
//     </div>
//   )
// }

// export default Todo



// import React, { useReducer } from 'react'

// const Todo = () => {
//     function reduser(color,action){
//         if(action.type=="red"){
//             return "red"
//         }
//     }
//  let [color,disptach]=   useReducer(reduser,"snow")
//   return (
//     <div   style={{backgroundColor:color,height:"100vh",width:"100vw"}} >
//         <button onClick={()=>disptach({type:"red"})}>red</button>
//         <button>gold</button>
//         <button>blue</button>
//         <button>green</button>

//     </div>
//   )
// }

// export default Todo



// import React, { useReducer, useState } from 'react'

// const Todo = () => {
// //  let [count,SetCount]=   useState(0)
// function reduser(count,action){
//     if(action.type=="inc"){
//         return count+1
//     }
//     return count
// }
//     let [count,disptach]=     useReducer(reduser, 0)
//   return (
//     <div>
//         <h2>{count}</h2>
//       <button onClick={()=>disptach({type:"inc"})}>++</button>

//     </div>
//   )
// }

// export default Todo






import React, { useReducer } from 'react'

const Todo = () => {
    let intialData={
        input:"",
        todos:[]
    }
    function reducer(state,action){
        if(action.type=="set_input"){
            return{
                ...state,input:action.payload
            }
        }else if(action.type=="add_TODO"){
            return{
                input:"",
                todos:[...state.todos,state.input]
            }
        }

    }
  let [state,disptach]= useReducer(reducer,intialData)
  return (
    <div>
        <input onChange={(e)=>disptach({type:"set_input",payload:e.target.value})}/>
        <button onClick={()=>disptach({type:"add_TODO"})}>add</button>
        {
            state.todos.map((a)=>{
                return(<>
                <h2>{a}</h2>
                </>)
            })
        }
    </div>
  )
}

export default Todo

