import { Routes, Route } from 'react-router-dom'
import Login from './Login'

function Auth() {
  return (
    <Routes>
      <Route path="/signin" element={<Login />} />
      <Route path="/" element={<Login />} />
    </Routes>
  )
}

export default Auth
