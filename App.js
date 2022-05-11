import React from 'react';
import Weather from './Country_search';
import {Routes,Route} from 'react-router-dom';
import Name from './Capital_Weather';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Weather />}/>
        <Route path='/Capital_Weather/:location' element={<Name/>}/>
      </Routes>

    </div>
  )
}
export default App
