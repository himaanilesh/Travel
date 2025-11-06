import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Hook1 from './Hook1.jsx'
// import Hooktask from './Hooktask.jsx'
// import As from './As.jsx'
// import Effect from './Effect.jsx'
// // import Map from './Map.jsx'
// import Pro from './Pro.jsx'
import New from './New.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Hook1/>
    <Hooktask/>
    <As/>
    <Effect/> */}
    {/* <Map/> */}
    {/* <Pro/> */}
    {/* <New/> */}

  </StrictMode>,
)
