import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import 'reset-css'
import 'antd/dist/reset.css'
import './assets/styles/global.less'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
