import './dashboard.css';

const Dashboard = ()=>{
     return(
         <div className='dashboard'>
            <div className='dash'>
                    <div className="logo">
                        <img src='/logo.png'></img>
                        <span> LAMA AI  </span>
                    </div>           

                    <div className="options">
                         <div className="option">
                             <img src='chat.png'></img>
                             <span> Create a new Chat</span>
                        </div>
                        <div className="option">
                             <img src='image.png'></img>
                             <span>Analyze Images</span>
                        </div>

                        <div className='option'>
                            <img src='code.png'></img>
                            <span>Help with my code</span>
                        </div>

                    </div>
                     <div className="formContainer">
                        <form>
                            <input type='text' placeholder='Ask me anything...'></input>
                            <button >
                                <img src='./arrow.png'></img>
                            </button>
                        </form>
                   </div>

            </div>
               
         </div>
     )
}
export default Dashboard;