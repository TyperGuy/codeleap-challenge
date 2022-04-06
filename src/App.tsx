import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'

function App() {
    return (
        <div className="box">
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
