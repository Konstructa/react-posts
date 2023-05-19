import React from 'react'

export const TextInput = ({ handleChange, searchValue}) => {
  return (
    <input 
        type='search'
        className='text-input'
        onChange={handleChange}
        value={searchValue}
   />
  )
}
