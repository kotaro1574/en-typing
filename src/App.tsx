import React, { useState } from 'react'
import './App.scss'
import "bootstrap/dist/css/bootstrap.min.css"
import {
  Card,
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap'

const App = () => {
  const [text, setText] = useState('')

  const handleChange = (event: any) => {
    setText(event.target.value)
  };

  console.log(text)

  return (
    <>
      <Card className="input-card">
        <Card.Body>
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
              <Button className="bg-info">保存</Button>
            </InputGroup.Append>
          </InputGroup>
        </Card.Body>
      </Card>
    </>
  );
}

export default App;
