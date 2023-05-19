import React from 'react'

export const Button = (props) => {
    const { text, onClick, disabled } = props

  return (
    <button onClick={onClick} className='button' disabled={disabled}>
        {text}
    </button>
  )
}
