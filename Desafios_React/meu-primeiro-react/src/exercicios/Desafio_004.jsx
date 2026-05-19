
import { useState } from 'react'



function App(){
    const [ligada, setLigada] = useState(false)

    function alternarTomada(){
        setLigada(!ligada)
    }

    return (
        <div>
            <h1>Tomada</h1>
            
            <button onClick ={alternarTomada}> 
            Ligar / Desligar </button>

            <p>
                {ligada ? 'Tomada ligada' : 'Tomada Desligada'}
            </p>

        </div>
    )
}

export default App