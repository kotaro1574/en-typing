import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


const Typing = () => {
  const [text, setText] = useState('test text')
  const [typing, setTyping] = useState(false)
  const [position, setPosition] = useState(0)
  const [typo, setTypo] = useState(new Array(0))

  console.log(typing)

  const handleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(text[0])
    // 入力可能の時
    if (typing) {
      // 文字の配列を取得
      let textSpans = document.querySelector("#textbox")!.children
      console.log(textSpans[position])
      console.log(position)
      // 入力したキーと現在入力しようとしている文字が一致する時
      if (e.key === text[position]) {
        // 現在の文字を入力済みとする
        textSpans[position].classList.add("typed-letters")
        textSpans[position].classList.remove("current-letter")
        // まだ入力していない文字がある時
        if (position <= text.length - 2) {
        // 次の位置へ移動
          textSpans[position + 1].className = "current-letter"
          setPosition(position + 1)
        // 全ての文字を入力し終わった時
        } else {
          setTyping(false)
        }
      // 間違ったキーを入力した時
      } else {
        // その位置での初めての打ち間違えである時
        if (typo.indexOf(position) === -1) {
          // 打ち間違えた位置の配列にその位置を追加
          setTypo([...typo, position])
          // 打ち間違えた文字であることを示すclassを追加
          textSpans[position].classList.add("typo");
        }
      }
    }
  }
  return (
    <>
      <div onKeyPress={(e) => handleKey(e)} tabIndex={0}>
        <div id='textbox'>
          <span className='typed-letters'>{text[0]}</span>
          {text
            .split("")
            .slice(0)
            .map(char => (
              <span className='waiting-letters'>{char}</span>
          ))}
        </div>
      </div>
    </>
  );
}

export default Typing;
