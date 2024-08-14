import React from 'react';
import Rectangle from './components/Rectangle'
import './App.css'

const App = () => {
  return (
    <div className='BlockPop'>
      <h1>BlockPop Game!</h1>

       <div className='Rectangle'>
          <Rectangle />
       </div>
    </div>
  );
};

export default App;