import React from 'react'
import Header from './componentes/header'
import Data from './componentes/data'
import Main from './componentes/main'
import './componentes/style.css'
import Relogio from './componentes/Relogio'

export default function App(){
  const suck =()=>  'Hoje, lhes trarei dicas valiosas de como chupar uma xerequinha, fique atento às seguintes dicas:'
  function bgl()
  { return ' bgl doido '}
 function pb()
 {return 'iae pb, sdds mano pb sdds eternas, pra sempre em nossos corações'}
 
  return(
    <>
    <div className='caixa'>
      <Relogio/>

    <Header/>
    <Main/>
   
    <Data 
      
   />
   {suck()}
    <ul>
      <li>{bgl()}</li>
      <li>caralhu comuq podi</li>
      <li>a tropa do abelha passa rodanu a grock</li>
      <li>{pb()}</li>
    </ul>
    <a href='www.youtube.com.br' target='blank'>eu vo botanu na tua tcheca</a>
  </div>
  <button>Oloco bicho</button><input type='text'></input>
 
    
    </>
  )  
  
}



