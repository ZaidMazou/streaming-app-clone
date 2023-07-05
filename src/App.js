import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Show from './Pages/Show';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/show/:id' element={<Show/>}/>
      <Route path='*' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;