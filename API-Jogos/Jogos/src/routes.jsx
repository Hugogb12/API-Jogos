import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Teste from './pages/CardTeste'
import Teste2 from './pages/Acao-Aventura'
import Teste3 from './pages/Estrategia'
import '../src/index.css'
function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/teste" element={<Teste />} ></Route>
                <Route path="/teste2" element={<Teste2 />} ></Route>    
                <Route path="/teste3" element={<Teste3 />} ></Route>    
            </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes
