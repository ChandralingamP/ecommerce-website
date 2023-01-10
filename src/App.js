import React from 'react'
import Home from './components/HomePage/Home'
import Engineering from './components/SampleBooks/Engineering/Engineering'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import EngineeringViewAll from './components/ViewAll/Engineering/Engineering'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="Engineering" element={<Engineering />}/>
          <Route path="Engineering/EngineeringViewAll" element={<EngineeringViewAll />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App