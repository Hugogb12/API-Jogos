import { Link } from 'react-router-dom'
import '../Header/Header.module.css'

function Header() {
    return (
        <>
        <header>
            <a><Link to='/'>PAGINA INICIAL</Link></a>
            <nav>
                <Link to='/teste'>RPG DE AÇÃO</Link>
                <Link to='/teste3'>ESTRATEGIA E SANDBOX</Link>  
                <Link to='/Teste2'>AÇÃO E AVENTURA </Link>
               
            </nav>
        </header>


        
        </>
    )    
}

export default Header