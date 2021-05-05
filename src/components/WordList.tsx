import React, {useState, useEffect} from 'react'
import axios from 'axios'

type Text = {
  id: number;
  text: string;
}[]

const WordList = () => {
  const [texts, setTexts] = useState<Text>([])

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

  console.log(texts)

  return (
    <>
      <div id="WordList">
        <ul>
          {texts.map((data: any, index: number) => <li key={index}>{data.text}</li>)}
        </ul>
      </div>
    </>
  )
}

export default WordList
