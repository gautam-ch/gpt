import './rootlayout.css';
import {Outlet,Link} from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react'
import { SignedIn, UserButton } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const Layout = ()=>{
     return(
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
         <div className='layout'>
               <header>
                <Link to='/' className='logo'>
                  <img src='/logo.png' alt=''></img>
                  <span>LAMA AI</span>
                </Link>
                <div className="user">
                  <SignedIn>
                     <UserButton/>
                  </SignedIn>
                </div>
               </header>
               <main>
                <Outlet/>
               </main>
         </div>
      </ClerkProvider>
     )
}

export default Layout;