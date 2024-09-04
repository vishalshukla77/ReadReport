import React from 'react';
import './App.css';
import {Navbar,LiveNews,Footer,EntertainmentNews} from './components'
function App() {
  const apikey =process.env.REACT_APP_API_KEY

  return (
    <div className="App">
      <Navbar/>
      <LiveNews apikey={apikey}/>
      <EntertainmentNews apikey={apikey}/>
      <Footer/>
    </div>
  );
}

export default App;
