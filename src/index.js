import React, { useState } from 'react'
import { render } from 'react-dom'

export const App = props => {
  const [count, setCount] = useState(0)

  return <main>
    <button
      className='h-screen w-full bg-blue-500 text-white flex-center text-2xl'
      onClick={e => setCount(count + 1)}
    >
      Click! {count}
    </button>
  </main>
}

render(<App />, document.getElementById('app'))
