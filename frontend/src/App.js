import React from 'react'
import UrlShorten from './components/UrlShorten'
import UrlExpand from "./components/UrlExpand"
import './components/UrlForm.css'

function App() {
  return (
    <div className="App">
      <UrlShorten />
      <UrlExpand />
    </div>
  )
}

export default App
