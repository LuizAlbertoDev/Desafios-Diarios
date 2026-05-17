import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function diminuir() {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Adicionar</button>
      <button onClick={diminuir}>Diminuir</button>
    </div>
  )
}

export default App