import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const tick=()=>{

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);}

setInterval(tick, 1000)