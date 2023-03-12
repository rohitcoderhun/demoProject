import './Appnew.css'
import Card from './Components/Card/Card';
import React, { useState } from 'react';
import vector1 from './Assets/Images/vector1.png'
import vector2 from './Assets/Images/vector2.png'
import vector3 from './Assets/Images/vector3.png'
import vector4 from './Assets/Images/vector4.png'
import vector5 from './Assets/Images/vector5.png'
import vector6 from './Assets/Images/vector6.png'
import vector9 from './Assets/Images/vector9.png'
import ellipse1 from './Assets/Images/ellipse1.png'
import vector10 from './Assets/Images/vector10.png'
import vector11 from './Assets/Images/vector11.png'
import vector12 from './Assets/Images/vector12.png'
import Chat from './Components/Chat/Chat';
import cat1 from './Assets/Images/cat1.jpg'




function App() {
  const [msg,setMsg]=useState('');
  const [chatData,setChatData]=useState([
    {
      img:cat1,
      username:"Rohit",
      chat:"Hi My name is Rohit ans what is yours"
    },
    {
      img:cat1,
      username:"Bhawna",
      chat:"Hi I am Bhawna"
    },
    {
      img:cat1,
      username:"Renu",
      chat:"Hello guys what is going on"
    }
  
  ])

  const handleChange=(e)=>{
    setMsg(e.target.value);
  }
  
  const handlesubmit=(e)=>{
    if(e.key==="Enter" && msg!==""){
        let obj={
          img:cat1,
          username:"Bhawna",
          chat:msg
        }
        setChatData([...chatData,obj])
    }
    setMsg("");
  }

  return (
    <div className='windowdiv'>
      <p style={{ fontWeight:"400", fontSize:"46px", lineHeight:"62px",textAlign:"center"}}>Watch of the Yokai hunter</p>
      <div className="mainContainer">
        <div className="listdiv">
          <div className='namediv'>
            <div className='name'>Appears Safe</div>
            <div className='name'>Appears Safe</div>
            <div className='name'>Appears Safe</div>
          </div>
          <div className='filterdiv'>
            <div>
              Currently Showing: Only newly listed pairs that appears to be safe. 

            </div>
            <div className='selectdiv'>
              sort by:
              <select name="filter" className='filter'>
                <option value="value1" name="value1">value1</option>
                <option value="value1" name="value1">value1</option>
                <option value="value1" name="value1">value1</option>
              </select>

            </div>
          </div>
          <Card/>
          <Card/>
          <Card/>

          

        </div>
        <div className="chatmaindiv" >
          <div className='chatdiv'>
            {
              chatData.length && chatData.map(ele=>{
                return(
                  <Chat username={ele.username} img={ele.img} chat={ele.chat} />
                )
              })
            }

          </div>
          <div className='msgdiv'>
            <input type="text" name="chat" className='enterText' placeholder='Connect your wallet to chat' onChange={handleChange} onKeyDown={handlesubmit}/>

          </div>

        </div>

      </div>
      
    </div>
  );
}

export default App;
