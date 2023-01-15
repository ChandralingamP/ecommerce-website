import React from 'react'
import Home from './components/HomePage/Home'
import Engineering from './components/SampleBooks/Engineering/Engineering'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import EngineeringViewAll from './components/ViewAll/Engineering/Engineering'
import Medical from "./components/SampleBooks/Medical/Medical"
import Story from './components/SampleBooks/Story/Story'
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="engineering" element={<Engineering />}/>
          <Route path="medical" element={<Medical />}/>
          <Route path="story" element={<Story />}/>
          <Route path="engineering/engineeringViewAll" element={<EngineeringViewAll />}/>
          {/* <Route path="Engineering/EngineeringViewAll" element={<EngineeringViewAll />}/> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App