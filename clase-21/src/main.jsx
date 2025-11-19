
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { restar, sumar} from './math.js'
import PI from './math.js'

let a  = 15
let b = 30
console.log(sumar(a, b))
console.log(restar(a, b))
console.log(PI)

createRoot(document.getElementById('root')).render(
  <App />
)
