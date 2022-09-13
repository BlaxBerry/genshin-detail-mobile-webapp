import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ThemeProvider from './components/Themes/ThemeProvider'
import ReactQueryClient from './components/QueryClientProvider'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ReactQueryClient>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ReactQueryClient>
  </React.StrictMode>
)
