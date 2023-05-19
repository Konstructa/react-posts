import React from 'react'

export const Button = (props) => {
    const { text, onClick } = props

  return (
    <button onClick={onClick}>
        {text}
    </button>
  )
}
