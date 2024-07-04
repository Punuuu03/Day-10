
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import Read from './Read'
import Update from './Update'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/read/:id' element={<Read/>}></Route> 
        <Route path='/edit/:id' element={<Update/>}></Route>       
         </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
