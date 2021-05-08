import React from 'react'

const WordList: React.FunctionComponent<{ list: any }> = ({list}) => {
  
  return (
    <>
      <div id="WordList">
        <ul>
          {list.map((data: any, index: number) => <li key={index}>{data.text}</li>)}
        </ul>
      </div>
    </>
  )
}

export default WordList
