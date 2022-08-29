import React from 'react'

export default function Carteirinha(props) {
  return (
    <>
        <div style={{justifyContent: 'center',backgroundColor: 'black', width: "400px",display: 'flex',height: "250px", borderRadius: "12px", marginTop: '40px'}}>
            <div style={{display: 'flex', alignItems: 'center', padding: '20px'}}>
                <div style={{marginRight: '15px'}}>
                    <img src={props.imgProps} alt="" width="130px" style={{borderRadius: "12px"}}></img>
                </div>

                <div>
                    <div style={{display: "flex", boxSizing: 'border-box'}}>
                        <img src={props.logoProps} alt="" width="85px" ></img>
                    </div>

                    <div>
                        <h4 style={{color: '#e50052', lineHeight: 0.1}}>{props.nomeProps}</h4>
                    </div>

                    <div>
                        <h5 style={{color: '#e50052'}}>{props.cursoProps}</h5>
                        <h5 style={{color: '#e50052'}}>{props.turmaProps}</h5>
                        <h5 style={{color: '#e50052'}}>{props.rmProps}</h5>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
