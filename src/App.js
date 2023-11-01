import React, { useRef } from 'react'
import "./App.css"
import circle from './circle.png'
import x from './x.png'
import { useState } from 'react'
let data=["","","","","","","","","",]
const App = () => {
  let [count,setcount]=useState(0);
  let [lock,setlock]=useState(false)
  let [xdata,setx]=useState(0)
  let [odata,seto]=useState(0)
  let title=useRef(null)
   let box1=useRef(null)
   let box2=useRef(null)
   let box3=useRef(null)
   let box4=useRef(null)
   let box5=useRef(null)
   let box6=useRef(null)
   let box7=useRef(null)
   let box8=useRef(null)
   let box9=useRef(null)
   let boxes=[box1,box2,box3,box4,box5,box6,box7,box8,box9]
  const change=(e,num)=>{
    if(lock){
      return 0;
    }
   else if( count % 2 === 0 ){
    e.target.innerHTML=`<img src=${x} alt="x"/>`
  data[num]="x"
    setcount(count+1)
    }
    else{
      e.target.innerHTML=`<img src=${circle} alt="circle"/>`
      data[num]="o"
    setcount(count+1)
    }
    checkwon();
  }
  const checkwon=()=>{
    if(data[0]===data[1] && data[1]===data[2] && data[2]!=="")
    {
      won(data[1])
    }
   else if(data[3]===data[4] && data[4]===data[5] && data[5]!=="")
    {
      won(data[4])
    }
    else if(data[6]===data[7] && data[7]===data[8] && data[8]!=="")
    {
      won(data[7])
    }
    else if(data[0]===data[3] && data[3]===data[6] && data[6]!=="")
    {
      won(data[3])
    }
    else if(data[1]===data[4] && data[4]===data[7] && data[7]!=="")
    {
      won(data[4])
    }
    else if(data[2]===data[5] && data[5]===data[8] && data[8]!=="")
    {
      won(data[5])
    }
    else if(data[0]===data[4] && data[4]===data[8] && data[8]!=="")
    {
      won(data[4])
    }
    else if(data[2]===data[4] && data[4]===data[6] && data[6]!=="")
    {
      won(data[4])
    }
    
  }
  const won=(winner)=>{
    setlock(true)
    if(winner==="x"){
       title.current.innerHTML="X won"
       setx(xdata+1)
    }
    else{
      title.current.innerHTML="O won"
      seto(odata+1)
    }
  }
  const reset=(e)=>{
    setlock(false)
    data=["","","","","","","","",""]
    title.current.innerHTML="tic-tac-toa"
    setcount(0)
    boxes.map((e)=>{
      e.current.innerHTML=""
      return 0
    })
  }
  return (
    <div className='container'>
      <p id='head' ref={title}>tic-tac-toa</p>
      <div className='score'>
        <div><p>X score</p>{xdata}</div>
       <div><p>O score</p>{odata}</div> 
      </div>
      <div className='board'>
        <div className='box' ref={box1} onClick={(e)=>{change(e,0)}}></div>
        <div  className='box' ref={box2} onClick={(e)=>{change(e,1)}}></div>
        <div  className='box' ref={box3} onClick={(e)=>{change(e,2)}}></div>
        </div>
        <div className='board'>
        <div  className='box' ref={box4} onClick={(e)=>{change(e,3)}}></div>
        <div  className='box' ref={box5} onClick={(e)=>{change(e,4)}}></div>
        <div  className='box'  ref={box6} onClick={(e)=>{change(e,5)}}></div>
        </div>
        <div className='board'>
        <div  className='box' ref={box7} onClick={(e)=>{change(e,6)}}></div>
        <div  className='box' ref={box8} onClick={(e)=>{change(e,7)}}></div>
        <div  className='box' ref={box9} onClick={(e)=>{change(e,8)}}></div>
        </div>
          <button onClick={reset}>reset</button>                                                        
    </div>
  )
}

export default App