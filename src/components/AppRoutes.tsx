import * as RouteComponent from 'pages'
import { Routes, Route } from 'react-router-dom'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RouteComponent.Home />} />
      <Route path="/profile" element={<RouteComponent.Profile />} />
      <Route path="/pages" element={<RouteComponent.Pages />} />
      <Route path="/blocks" element={<RouteComponent.Blocks />} />
      <Route path="/settings" element={<RouteComponent.Settings />} />
      <Route path="/users" element={<RouteComponent.Users />} />
    </Routes>
  )
}
