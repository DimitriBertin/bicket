import * as RouteComponent from 'pages'
import { Routes, Route } from 'react-router-dom'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RouteComponent.Home />} />
    </Routes>
  )
}