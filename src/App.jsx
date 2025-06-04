import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import DashBoard from './components/DashBoard'

function App() {

  return (
    <Router>
      <Navbar />

      <div className='flex-1 ml-64'>
        <Routes>
          <Route path="/" element={<DashBoard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
