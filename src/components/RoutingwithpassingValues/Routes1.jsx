import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Comp3 from './comp3'
import Main from './main'
const Routes1 = () => {
  return (
    <>
    <BrowserRouter>
       <Routes>
          <Route path="/main"  element={<Main/>}/>
          <Route path="/comp3"  element={<Comp3/>}/>

       </Routes>
    
    
    </BrowserRouter>

    </>
  )
}

export default Routes1