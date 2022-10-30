import './App.scss'
import { Home } from './scenes/Home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from './scenes/Login/Login'
import { Register } from './scenes/Register/Register'
import { Header } from './components/Header/Header'
import { Profile } from './scenes/Profile/Profile'
import { Article } from './scenes/Article/Article'

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/articles" element={<Home />} />
        <Route path="/article/:articleId" element={<Article />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/articles" replace />} />
      </Routes>
    </div>
  )
}
