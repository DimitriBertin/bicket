import * as RouteComponent from 'pages'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'

export default function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<RouteComponent.Home />} />
        <Route path="/profile" element={<RouteComponent.Profile />} />
        <Route path="/pages" element={<RouteComponent.Pages />} />
        <Route path="/blocks" element={<RouteComponent.Blocks />} />
        <Route path="/settings" element={<RouteComponent.Settings />} />
        <Route path="/users" element={<RouteComponent.Users />} />
      </Routes>
    </Layout>
  )
}
