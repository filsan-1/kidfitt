import React from 'react';
import './App.css';
import FoodLog from './FoodLog';  // Import the FoodLog component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to KidFit!</h1>  {/* do i like this name  */}
        <p>Start logging your  childs meals and track fitness!</p>
      </header>

      <main>
        <FoodLog />  {/* Render the FoodLog component here */}
      </main>
    </div>
  );
}

export default App;
