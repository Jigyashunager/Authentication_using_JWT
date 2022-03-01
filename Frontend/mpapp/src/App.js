import Login from './Login';
import Register from './Register';
import {
    Routes,
    Route
  } from 'react-router-dom';


const App =()=>{ 
    return(
        <Routes>
            <Route exact path ='/' element={<Register/>}/>
            <Route exact path='/login' element= {<Login/>}/>
        </Routes> 

    )
}
export default App