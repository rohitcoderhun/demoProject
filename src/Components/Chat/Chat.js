import React from 'react'
import vector1 from '../../Assets/Images/vector1.png'
import './Chat.css'

const Chat = (props) => {
    console.log(props)

    const randomcolor="rgb(" + Math.floor(Math.random() * 255)
    + "," + Math.floor(Math.random() * 255) + ","
    + Math.floor(Math.random() * 255) + ")";
  return (
    <>
    <div className='chatcarddiv'>
        <div className='chatcardimg'>
            <img src={props.img} alt="userimg" />
        </div>
        <div className='chatcardtext'>
            <div className='chatname' style={{color:randomcolor}}>
                <p>{props.username}</p>
                
            </div>
            <div>
                <p className='chattext' style={{color:"#3D3D3D"}}>{props.chat}</p>
            </div>

        </div>
        

    </div>

    </>
  )
}

export default Chat