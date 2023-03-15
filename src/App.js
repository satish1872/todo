import React, { useState } from 'react'
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  display:inline-block;
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  height: 30px;
  width: 50px;
  border-radius: 2px;
  cursor: pointer;
`;

const Text = styled.input`
  border: 2px solid #000;
`;

const TaskCount = styled.span`
  margin: 10px;
`;

const Task = styled.div`
`;

/* 
todolist=[
{
     id: id, //unique id
     task: Task, // a task to be added to the todo list
     complete: false, //false means task is incomplete, true means task is completed
 }
];

 */
function App() {
  const [input,setInput]=useState("");
  const [todolist,setTodoList]=useState([]);
  const [completedTaskCount,setCompletedTaskCount]=useState(0);

  const handleCLick=()=>{
   const id=todolist.length-1;
   setTodoList((prevTodolist)=>[
    ...prevTodolist,
    {
      id:id,
      task:input
    }
   ])
   setInput('');

  }

  const deleteTodo=(e,todo)=>{
    console.log(e);
    console.log(todo);
    let resultantTodo=[];
    for(let currtodo of todolist){
      if(currtodo.id!=todo.id){
        resultantTodo.push(currtodo);
      }
    }
    setTodoList(()=>[
      ...resultantTodo
    ])
  }

  return (
    <>
    <Container>
     <div>
     Todo list
      <Text value={input} onInput={e=>setInput(e.target.value)}/>
      <Button onClick={()=>handleCLick()}>Add</Button>
      {/* <Task>
        <TaskCount>
          Pending Task
        </TaskCount>
        <TaskCount>
          Completed Task
        </TaskCount>
      </Task> */}
     </div>
     <div>
      <ul>
{/* list items consisiting of tasks will be listed */}
  {todolist.map((todo)=>{
    return (
      <>
      <div>
      <ol 
       onClick={(e)=>deleteTodo(e,todo)}
      >{` ${todo?.task}`}</ol>
      </div>
      </>
    )
  })}
      </ul>
     </div>
    </Container>
    </>
  )
}

export default App