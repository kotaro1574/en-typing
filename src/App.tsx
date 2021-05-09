import React, {useState, useEffect} from 'react'
import './scss/App.scss'
import "bootstrap/dist/css/bootstrap.min.css"
import SideBar from './components/SideBar'
import Typing from './components/Typing'
import WordList from './components/WordList'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'

type Text = {
  id: number;
  text: string;
}[]

const App = () => {
  const [texts, setTexts] = useState<Text>([])

  const params = {
        crossDomain: true
      }
  const translation = () => {
    const test = axios.get(`https://script.google.com/macros/s/AKfycbwWPol8DhxyFe32NUj2BuZt595yG9RTuK3HpnbIzeBZfR6ChAfr4E1ZwV0OBFKirBa8/exec?text=Hello&source=en&target=ja`, {params})
    console.log(test)
  }

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/texts`)
      .then(res => {
        let data = res.data.data
        const texts = data.map((data: any): any => ({
          id: data.id,
          text: data.text
        }))
      setTexts(texts)
      })
  }, [])

  return (
    <>
      <div id="App">
        <BrowserRouter>
          <div className="left">
            <SideBar />
          </div>
          <div className="right">
            <Switch>
              <Route path="/" exact children={<Typing list={texts}/>} />
              <Route path="/list" children={<WordList list={texts}/>} />
            </Switch>
          </div>
        </BrowserRouter>
        <button onClick={translation}>test</button>
      </div>
    </>
  );
}

export default App;
