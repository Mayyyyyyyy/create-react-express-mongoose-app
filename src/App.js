import './index.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Content from './components/content';


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route exact path="/" element={<Content/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
