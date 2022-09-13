import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom' // BrowserRouter not work on for github pages, https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing
import { QueryClient, QueryClientProvider } from 'react-query'
import MaterialThemeProvider from './components/Themes/ThemeProvider'
import ErrorBoundary from './components/Common/ErrorBoundary'
import App from './App'
import './styles/index.scss'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <MaterialThemeProvider>
            <App />
          </MaterialThemeProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </HashRouter>
  </React.StrictMode>
)
