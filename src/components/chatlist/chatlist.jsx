import { Link } from 'react-router-dom';
import './chatlist.css';

const ChatList =()=>{
    return (
        <div className='chatlist'>
            
            <span className='title'>Dashboard</span>
            <Link to='/dashboard'>Create a new Chat</Link>
            <Link to='/'>Explore Lama AI</Link>
            <Link to='/'>Contacts</Link>
            <hr/>
            <span className='title'>Recent Chats</span>
            <div className="list">
              <Link to='/'>Chat Title</Link>
              <Link to='/'>Chat Title</Link>
              <Link to='/'>Chat Title</Link>
              <Link to='/'>Chat Title</Link>
              <Link to='/'>Chat Title</Link>
              <Link to='/'>Chat Title</Link>
              <Link to='/'>Chat Title</Link>
              <Link to='/'>Chat Title</Link>
              <Link to='/'>Chat Title</Link>
              <Link to='/'>Chat Title</Link>
              <Link to='/'>Chat Title</Link>
              <Link to='/'>Chat Title</Link>
              <Link to='/'>Chat Title</Link>
              <Link to='/'>Chat Title</Link>
              <Link to='/'>Chat Title</Link>
              <Link to='/'>Chat Title</Link>
              <Link to='/'>Chat Title</Link>
              <Link to='/'>Chat Title</Link>
              <Link to='/'>Chat Title</Link>
              <Link to='/'>Chat Title</Link>
              <Link to='/'>Chat Title</Link>
              <Link to='/'>Chat Title</Link>
              <Link to='/'>Chat Title</Link>
              <Link to='/'>Chat Title</Link>
            </div>
            <hr/>
            <div className="upgrade">
                <img src='/logo.png' alt=''></img>
                <div className="texts">
                    <span>Upgrade to Lama AI pro</span>
                    <span>Get unlimited access to all features</span>
                </div>
            </div>

        </div>
    )
}
export  default ChatList