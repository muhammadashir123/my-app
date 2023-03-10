
import logo from './logo.svg';
import Heading from './heading';
import './App.css';
import useReactRouter from 'use-react-router';
import { useState } from 'react';

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
export default function MyApp() {
  const handleUpClick=()=>{
    // let newText= text.toUpperCase();
    // setText(newText)
  }


  let arr = [1,2,3,4]
  //const [text, setText]= useState(arr);
const [first, setArr]=useState(arr)
  const addNumber=()=>{
    setArr(...first)

  }
console.log([...first])
  return (
    <div>
    <br></br>
    {/* <textarea   rows="4" cols="50" value={text}>
At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.
</textarea> */}
<button onClick={handleUpClick}>convert to upercase</button>
<button onClick={addNumber}>addNumber</button> 
         
         <ul>
             { first &&
              first.map((num) => {
                return <li key={num}>{num}</li>
              })
             }
         </ul>

<br></br>
  
    </div>
  );
}


