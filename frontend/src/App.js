import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UrlShorten from './components/UrlShorten'
import UrlExpand from "./components/UrlExpand"
import UrlRedirect from "./components/UrlRedirect"
import './components/UrlForm.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<UrlShorten />} /> {/* Home Page */}
          <Route path="/expand" element={<UrlExpand />} /> {/* URL Expander */}
          <Route path="/:shortCode" element={<UrlRedirect />} /> {/* Handles Short Links */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
