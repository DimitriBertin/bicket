import { BrowserRouter } from 'react-router-dom'
import { AuthDispatch } from './components'
import { ThemeProvider } from 'contextes/themes'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { useEffect } from 'react'
import 'styles/app.scss'

const firebaseConfig = {
  apiKey: 'AIzaSyA2-7gWfxqgdIkK_b-YEmSW2V-G-f0dhfk',
  authDomain: 'biket-720e4.firebaseapp.com',
  projectId: 'biket-720e4',
  storageBucket: 'biket-720e4.appspot.com',
  messagingSenderId: '677894593144',
  appId: '1:677894593144:web:568ad53c26942b8505eb8d',
  measurementId: 'G-3PQ75V2LJN',
}

const app = initializeApp(firebaseConfig)

function App() {
  useEffect(() => {
    console.log('app', app)
    getAnalytics(app)
  }, [])

  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthDispatch />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
