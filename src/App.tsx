import React from 'react';
import Dashboard from './Dashboard';
import Header from './Header';

function App() {
  return (
    <div className="App flex w-screen h-screen overflow-hidden">
        <Dashboard />

        <div className="main-area flex items-start w-full">
          <Header />
        </div>
    </div>
  );
}

export default App;
