import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Quiz from './Quiz'
import Result from './Result'
import Review from './Review'
const MainRouting = () => {
  return (
<>
    <BrowserRouter>
    
    <div>MainRouting</div>
    <Routes>

        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/result" element={<Result/> }/>
        <Route path="/review" element={<Review/>}/>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default MainRouting