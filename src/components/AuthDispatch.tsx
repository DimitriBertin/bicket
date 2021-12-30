import { useState, useEffect } from 'react'
import Auth from 'pages/Auth'
import AppRoutes from './AppRoutes'
import { useNavigate } from 'react-router-dom'

function AuthDispatch() {
  const [isLogged, setLogged] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLogged) navigate('/signin')
  }, [])

  return isLogged ? <AppRoutes /> : <Auth />
}

export default AuthDispatch
