import React from 'react'
import { useEffect, useState } from 'react'

export default function Semaforo(props) {
  const [semaforo = 0, setSemaforo] = useState()
  
  useEffect(() => {
    if (semaforo === 0) {
      document.getElementById('pare').style.display = "none"
      document.getElementById('atencao').style.display = "none"
      document.getElementById('siga').style.display = "none"
      document.getElementById('btnSemaforo').innerHTML = "Ligar Semaforo"
    } else if (semaforo === 1) {
      document.getElementById('pare').style.display = "flex"
      document.getElementById('btnSemaforo').innerHTML = "Trocar"
    } else if (semaforo === 2) {
      document.getElementById('pare').style.display = "none"
      document.getElementById('atencao').style.display = "flex"
      document.getElementById('siga').style.display = "none"
    } else if (semaforo === 3) {
      document.getElementById('pare').style.display = "none"
      document.getElementById('atencao').style.display = "none"
      document.getElementById('siga').style.display = "flex"
    }
  }, [semaforo]);
  return (
    <>
        <div>
            <h2 id='pare' style={{
              backgroundColor:props.colorPareProps,
               }}>Pare</h2>
            <h2 id='atencao' style={{
              backgroundColor: props.colorAtencaoProps
            }}>Atenção</h2>
            <h2 id='siga' style={{
              backgroundColor: props.colorSigaProps
            }}>Siga</h2>
            <button id='btnSemaforo' onClick={() => {
              if(semaforo === 0) {
                setSemaforo(1)
              } else if(semaforo === 1){
                setSemaforo(2)
              } else if (semaforo === 2){
                setSemaforo(3)
              } else {
                setSemaforo(0)
              }
            }} style={{width: "130px",color: "aliceblue", backgroundColor: "transparent", border: "solid",borderWidth: "2px" ,borderColor: "aliceblue",padding: "1em", borderRadius: "0.5em", fontFamily: "'Roboto', sans-serif"}} >Trocar</button>
        </div>
    </>
  )
}
