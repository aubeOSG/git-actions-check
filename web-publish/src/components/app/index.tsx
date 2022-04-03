import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import pageHome from '../../pages/home/index'

const basename = '/git-actions-check'

const ReRoute = () => {
  console.log('rerouting')
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={basename} />} />
      </Routes>
    </Router>
  )
}

const AppRoutes = () => {
  console.log('app routing')
  return (
    <Router basename={basename}>
      <main>
        <Routes>
          <Route path={`${pageHome.Route}`} element={<pageHome.Page />} />
          <Route path="*" element={<Navigate to={basename} />} />
        </Routes>
      </main>
    </Router>
  )
}

export const getApp = () => {
  const pathname = window.location.pathname
  const isReRouted = pathname === '/'
  console.log('pathname', pathname)
  return {
    Routes: () => {
      return isReRouted ? <ReRoute /> : <AppRoutes />
    },
    isReRouted,
  }
}

export default {
  getApp,
}
