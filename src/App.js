import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from "react";
import Todo from "./components/Todo";
function App() {
  // console.log(1);
  // useEffect(()=>{
  //   console.log("Inside 1");
  // });
  // const [compo,setShowcompo]=useState(false);
  // let A=()=><div>Component A</div>;
  // let B=()=><div>Component B</div>;
  
  return (
    <div className="App">
      {/* <h1>Hello</h1>
      {compo?<A/>:<B/>} */}
      <Todo/>
    </div>
  );
}

export default App;
