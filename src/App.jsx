import './App.css'
import { Routes, Route } from 'react-router-dom'
import routes from './routes/routes'

function App() {
  return (
    <>
      <Routes>
        {routes.map((route, index) => (
          <Route
            path={route.path}
            element={route.element}
            key={index}
          />
        ))}
      </Routes>
    </>
  )
}

export default App
