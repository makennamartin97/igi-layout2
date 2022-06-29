import './App.css';
import React,{useState ,useEffect} from 'react'
import Main from './components/Main'
import Navbar from './components/Navbar.jsx';
import LoginContext from './contexts/LoginContext';
// import Loading from './components/Loading';


function App() {
  const [loginpage, setloginpage] = useState(false)
  
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2150);
  // })
  return (
    <LoginContext.Provider value={{loginpage, setloginpage}}>
    <div className="App">
    {/* {isLoading===true ?
        <Loading/>:
<div> */}
         <Navbar/>
        <Main/>
        {/* </div> */}
   
      
       
{/* } */}
        
        

      
    </div>
    </LoginContext.Provider>
  );
}

export default App;
