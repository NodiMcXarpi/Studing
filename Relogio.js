import React from 'react'
export default function Relogio(){
    return(
        <>
        <p>{new Date().toLocaleTimeString()}</p>
        </>
    )
}



import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';




const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 👇️ no arquivo index.js, é necessário passar uma função por dentro dos elementos para rodar o relógio 

function tick(){
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);}

setInterval(tick, 1000)
