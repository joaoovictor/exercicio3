import React from 'react'

export default function Carros(props) {
    return (
    <>
        <ul>
            {props.carrosProps.map((c, i) =>
                <li key={i}>{c}</li>
            )}
        </ul>
    </>
  )
}
