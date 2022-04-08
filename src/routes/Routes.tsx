import { createContext, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'

export const MyContext = createContext('')
const Routers = () => {
    const [context, setContext] = useState('Raimundo')
    return (
        <div className="box">
            <Router>
                <MyContext.Provider value={context}>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/home" element={<Home />} />
                    </Routes>
                </MyContext.Provider>
            </Router>
        </div>
    )
}

export default Routers
