import React, { useState } from 'react'
import '../scss/Typing.scss'

const Typing = () => {
  const [keydown, setKeydown] = useState('')

  document.addEventListener('keydown', e => {
    setKeydown(e.key)
  });
  return (
    <>
      <div id="typing">
        <p className="target">{keydown}</p>
      </div>
    </>
  );
}

export default Typing;
