import React, { useState } from 'react'
import '../scss/SideBar.scss'
import axios from 'axios'
import {
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap'

const SideBar = () => {
  const [text, setText] = useState('')

  const handleChange = (event: any) => {
    setText(event.target.value)
  };

  console.log(text)

  const sendText = () => {
    axios.post(`http://127.0.0.1:8000/api/texts`, { text })
      .then(res => {
        setText('')
      })
  }
  return (
    <>
      <div id="SideBar">
        <ul>
          <li className="title">
            <h1>en-typing</h1>
          </li>
          <li className="typing">
            <a>Typing</a>
          </li>
          <li className="list">
            <a>単語一覧</a>
          </li>
          <li className="text-form">
            <InputGroup>
            <FormControl
              placeholder="覚えたい英単語"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              type="text"
              name="text"
              value={text}
              onChange={handleChange}
            />
            <InputGroup.Append>
              <Button
                className="bg-info"
                onClick={sendText}
              >保存</Button>
            </InputGroup.Append>
          </InputGroup>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SideBar
