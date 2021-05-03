import React from 'react'
import { Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"

type Props = {
  children: any,
  onClick: () => void,
}

const MyButton = ({ children, onClick }: Props) => {
  return (
    <>
      <Button variant="primary" onClick={onClick}>
        {children}
      </Button>{' '}
    </>
  )
}

export default MyButton
