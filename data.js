import React from 'react'
export default function Data(props){
    const soma = ()=>{
        return n1 + n2
    }
    const n1 = 10
    const n2 = 5
    return(
        <>
       <p className='xerequinha'>Todo mundo se amarra numa xerequinha né?</p>
       <p>bagulho doido</p>
       <p>'A soma de {n1} com {n2} é igual a {soma()} </p>

        </>
    )

}