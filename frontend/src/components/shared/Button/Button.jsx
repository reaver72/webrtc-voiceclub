import React from 'react'

const Button = ({text, children, onClick}) => {
  return (
    
      <button type='button' onClick={onClick} className="flex items-center justify-center bg-blue-600 rounded-full py-1 px-3 hover:bg-blue-700 active:bg-blue-600">
          {text}
          {children}
   </button>
  )
}

export default Button