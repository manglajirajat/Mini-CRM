import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import DashBoard from './components/DashBoard'
import AudienceSegmentation from './components/AudienceSegmentation'

function App() {

  return (
    <Router>
      <Navbar />

      <div className='flex-1 ml-64 bg-gray-50'>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/audience-segmentation" element={<AudienceSegmentation />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
