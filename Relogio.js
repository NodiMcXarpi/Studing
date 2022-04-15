import React from 'react'
export default function Relogio(){
    return(
        <>
        <p>{new Date().toLocaleTimeString()}</p>
        </>
    )
}

// 👇️ no arquivo index.js, é necessário passar uma função por dentro dos elementos para rodar o relógio
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';


function tick(){

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);



root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);}

setInterval(tick, 1000)
