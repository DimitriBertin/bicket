import { BrowserRouter } from 'react-router-dom'
import { AuthDispatch } from './components'

import 'styles/app.scss'

function App() {
  return (
    <BrowserRouter>
      <AuthDispatch />
    </BrowserRouter>
  )
}

export default App
