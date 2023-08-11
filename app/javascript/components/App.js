import React from 'react'
import Airlines from './Airlines/Airlines'
import Airline from './Airline/Airline'
import { Routes ,Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Airlines/>}/>
      <Route exact path="/airlines/:slug" element={<Airline/>}/>
    </Routes>
  );
}

export default App