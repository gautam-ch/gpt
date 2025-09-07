import { Link, useNavigate } from 'react-router-dom';
import './homepage.css';
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from 'react';
import { useAuth } from '@clerk/clerk-react';

const HomePage = ()=>{
    const {userId,isLoaded} =useAuth();
    const navigate =  useNavigate();
    const [typingStatus,setTypingStatus]=useState('human1');

    useEffect(()=>{
             if(isLoaded &&userId){
                console.log(userId);
                navigate('/dashboard');
             }

    },[userId,navigate,isLoaded])
     return(
         <div className='homepage'>
                <img src='./orbital.png' className='orbital'/>
                 <div className="left">
                       <h1>LAMA AI</h1>
                       <h2>Supercharge your creativity and productivity</h2>
                       <h3>If a machine can successfully imitate a human to the point of being indistinguishable, then it can be said to think</h3>
                        <Link to='/dashboard'>Get Started</Link>
                 </div>
                 <div className="right">
                       <div className="imgContainer">
                        <div className="bgContainer">
                            <div className="bg">
                            </div>
                        </div>
                          <img src='./bot.png' alt='' className='bot'></img>
                            <div className="chat">
                                <img src={typingStatus==='human1'?`./human1.jpeg`:typingStatus==='human2'?'./human2.jpeg':'./bot.png'}></img>
                            <TypeAnimation
                                sequence={[                                    
                                    'Human1: What are you doing?',
                                    1000,()=>{setTypingStatus('bot')},
                                    'Bot:Hanging out with your girlfriend!',
                                    1000,,()=>{setTypingStatus('human2')},
                                    "Human2:Who's there, honey?",
                                    1000,,()=>{setTypingStatus('bot')},
                                    'Bot:Your second honey, babe!',
                                    1000,,()=>{setTypingStatus('human1')},
                                ]}
                                wrapper="span"
                                repeat={Infinity}
                                cursor={true}
                                omitDeletionAnimation={true}
                                />
                            </div>
                             
                       </div>
                 </div>
                 <div className="terms">
                    <img src='/logo.png' alt=''></img>
                    <div className="links">
                    <Link to='/'>Terms of Service</Link>
                    <span>|</span>
                    <Link to='/'>Privacy Policy</Link>
                    </div>
                 </div>
         </div>
     )
}

export default HomePage;