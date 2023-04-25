import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Home name='Todd' age={2}/>
       <Home name={'Veronica'}/>
      </header>
    </div>
  );
}

export default App;
