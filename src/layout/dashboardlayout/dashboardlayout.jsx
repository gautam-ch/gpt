import { Outlet, useNavigate } from 'react-router-dom';
import './dashboardlayout.css';
import { useAuth } from '@clerk/clerk-react';
import { useEffect } from 'react';
import ChatList from '../../components/chatlist/chatlist';


const DashboardLayout =()=>{
    const {userId,isLoaded}  = useAuth();
    const navigate = useNavigate();

    useEffect(()=>{
          if(isLoaded ){
               if(!userId){
                    navigate('/sign-in');
               }
          }
    },[navigate,userId,isLoaded])

    if(!isLoaded){
        return <div>
            Loading..
        </div>
    }

    return(
        <div className='dashboardlayout'>
        <div className="menu">
              <ChatList></ChatList>
        </div>
        <div className="content">
            <Outlet/>
        </div>
        </div>
    )
}

export default DashboardLayout;