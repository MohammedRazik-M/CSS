import { useState } from 'react'
import AdviceApp from './AdviceApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AdviceApp />
    </>
  )
}

export default App
