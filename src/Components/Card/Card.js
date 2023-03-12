import React from 'react'
import './Card.css'
import fox from './fox.png'
import path from '../../Assets/Images/path.png'
import vector1 from '../../Assets/Images/vector1.png'
import vector2 from '../../Assets/Images/vector2.png'
import vector3 from '../../Assets/Images/vector3.png'
import vector4 from '../../Assets/Images/vector4.png'
import vector5 from '../../Assets/Images/vector5.png'
import vector6 from '../../Assets/Images/vector6.png'
import vector9 from '../../Assets/Images/vector9.png'
import ellipse1 from '../../Assets/Images/ellipse1.png'
import vector10 from '../../Assets/Images/vector10.png'
import vector11 from '../../Assets/Images/vector11.png'
import vector12 from '../../Assets/Images/vector12.png'


const Card = () => {
  return (
    <>
        <div className='maincard'>
            <div className='cardleft' > 
                <div className='left'>
                    
                        <img src={fox} alt="img" className='leftbigimg' />

                    
                    <div className='vectordiv'>
                        <img src={vector1} alt="" />
                        <img src={vector2} alt="" />
                        <img src={vector3} alt="" />
                        <img src={vector4} alt="" />
                        <img src={vector5} alt="" />
                        <img src={vector6} alt="" />
                        <img src={path} alt="" />
                    </div>

                    <div className='timediv'>
                        <p className='timelisted'>Time Listed</p>
                        <p className='time'>1.5 Hours</p>
                         
                    </div>

                    
                    

                </div>
                
                
                <div>
                    
                </div>
                
                

            </div>
            <div className='cardright'>
                <div className='title'>
                    <p style={{fontSize:"25px",fontWeight:"600", fontFamily:"open sans"}}>$SHEBENO</p>
                    <p style={{fontSize:"25px", fontWeight:"300"}}>120%+</p>
                    <select name="time" className='selecttime'>
                        <option value="12hrs">12hrs</option>
                        <option value="12hrs">12hrs</option>
                        <option value="12hrs">12hrs</option>
                        <option value="12hrs">12hrs</option>
                    </select>

                </div>
                <p style={{fontSize:"20px", fontWeight:"300"}}>Fable of the Baby Dragon Tyrant</p>
                <div className='liquidity'>
                    <div>LIQUIDITY:  $40.2K</div>
                    <div>MARKET CAP:  $215.3K</div>
                    <div>MARKET CAP:  $215.3K</div>
                    <div>MARKET CAP:  $215.3K</div>

                    
                </div>
                <div className='copycodediv'>
                    <div>Contract: 0xaa1db055d53f14f7e6a13e01097b17db620d3ef4 <img src={vector9} alt="" onClick={()=>{navigator.clipboard.writeText("0xaa1db055d53f14f7e6a13e01097b17db620d3ef4");}} /></div>
                    <div>Contract: 0xaa1db055d53f14f7e6a13e01097b17db620d3ef4 <img src={vector9} alt="" onClick={()=>{navigator.clipboard.writeText("0xaa1db055d53f14f7e6a13e01097b17db620d3ef4");}} /></div>
                </div>

                <div className='statusdiv'>
                    <div>
                        <p><img src={ellipse1} alt="" /> Liquidity: Locked (1 Month)</p>
                        <p><img src={ellipse1} alt="" /> Liquidity: Locked (1 Month)</p>
                        <p><img src={ellipse1} alt="" /> Liquidity: Locked (1 Month)</p>
                        <p><img src={ellipse1} alt="" /> Liquidity: Locked (1 Month)</p>
                        <p><img src={ellipse1} alt="" /> Liquidity: Locked (1 Month)</p>
                        <p><img src={ellipse1} alt="" /> Liquidity: Locked (1 Month)</p>
                        <p><img src={ellipse1} alt="" /> Liquidity: Locked (1 Month)</p>
                        <p><img src={ellipse1} alt="" /> Liquidity: Locked (1 Month)</p>
                        <p><img src={ellipse1} alt="" /> Liquidity: Locked (1 Month)</p>
                        <p><img src={ellipse1} alt="" /> Liquidity: Locked (1 Month)</p>
                        <p><img src={ellipse1} alt="" /> Liquidity: Locked (1 Month)</p>
                        <p><img src={ellipse1} alt="" /> Liquidity: Locked (1 Month)</p>
                        <p><img src={ellipse1} alt="" /> Liquidity: Locked (1 Month)</p>
                        
                        
                    </div>
                </div>
                <div className='cardbottombutton'>
                    <div style={{backgroundColor: "#3946A0"}}>
                       <img src={vector10} alt="" /> Trade
                    </div>
                    <div style={{backgroundColor:"#202636"}}>
                       <img src={vector11} alt="" />  Chart
                    </div>
                    <div style={{backgroundColor:"#C77802"}}>
                       <img src={vector12} alt="" /> Poor structure but low risk of a scam.
                    </div>
                </div>

            </div>

        </div>
    </>
  )
}

export default Card