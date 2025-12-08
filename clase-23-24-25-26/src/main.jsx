import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import ThemeContextProvider from './Context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  /* Habilitamos las funcionalidades de react router en toda la app */
  <ThemeContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeContextProvider>
)
