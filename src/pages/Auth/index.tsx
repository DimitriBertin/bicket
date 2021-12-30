import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import Forgot from './Forgot'

function Auth() {
  return (
    <Routes>
      <Route path="/signin" element={<Login />} />
      <Route path="/forgot-pass" element={<Forgot />} />
      <Route path="/" element={<Login />} />
    </Routes>
  )
}

export default Auth
