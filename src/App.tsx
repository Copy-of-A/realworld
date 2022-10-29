import './App.scss'
import { Home } from './scenes/Home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from './scenes/Login/Login'
import { Register } from './scenes/Register/Register'
import { Header } from './components/Header/Header'

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  )
}
