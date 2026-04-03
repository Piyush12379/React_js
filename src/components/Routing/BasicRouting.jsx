import React,{BrowserRouter,Routes,Route} from 'react-router-dom'
import Counter from "../counter"
const BasicRouting = () => {
  return (
    <>
    <BrowserRouter>
    
    <div>BasicRouting</div>

     <Routes>
       <Route path="/ab" element= {<Counter/>} />   
       <Route path="/about" element= {<Counter/>} /> 
     </Routes> 
    
    </BrowserRouter>
       
    


    </>
  )
}

export default BasicRouting