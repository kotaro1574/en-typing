import React from 'react'
import './scss/App.scss'
import "bootstrap/dist/css/bootstrap.min.css"
import SideBar from './components/SideBar'
import WordList from './components/WordList'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


const App = () => {
  

  return (
    <>
      <div id="App">
        <div className="left">
          <SideBar />
        </div>
        <div className="right">
          <WordList />
        </div>
      </div>
    </>
  );
}

export default App;
