import React, { useCallback } from 'react'
;
export const Button = () => {
    const onClick = useCallback(() => {
        console.log(("Vite + React + Typescript + Tailwindcss"));
    }, [])
  return (
    <button onClick={onClick} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Vite or Webpack
    </button>
  )
}

export default Button;
