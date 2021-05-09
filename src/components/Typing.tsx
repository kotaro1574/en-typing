import React, { useState } from 'react'
import '../scss/Typing.scss'

const Typing: React.FunctionComponent<{ list: any }> = ({list}) => {
  const [keydown, setKeydown] = useState('')
  const [text, setText] = useState('hello')
  let location = 0;

  document.addEventListener('keydown', e => {
    if (e.key === text[location]) {
      location++;

      setText('_'.repeat(location) + text.substring(location))
    }
  });
  return (
    <>
      <div id="typing">
        <p className="target">{text}</p>
      </div>
    </>
  );
}

export default Typing;
