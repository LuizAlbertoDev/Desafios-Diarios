import { useState } from 'react'

function Produto({nome,preco}){
  const [comprado, setComprado] = useState(false)

  const nome = "Televisao"

  function verificar(){
    setComprado(true)
  }

  return (
    <div>
      <button onClick={verificar}>
        Comprar
      </button>

      {comprado && <p>Você comprou: {nome}</p>}
      {comprado && <p>Você comprou: {nome}</p>}
      {comprado && <p>Você comprou: {nome}</p>}
    </div>
  )

}

export default Produto