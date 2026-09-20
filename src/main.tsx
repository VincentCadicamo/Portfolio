import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

function PrerenderTrigger() {
  React.useEffect(() => {
    document.dispatchEvent(new Event('custom-render-trigger'))
  }, [])
  return null
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <PrerenderTrigger />
    </BrowserRouter>
  </React.StrictMode>,
)
