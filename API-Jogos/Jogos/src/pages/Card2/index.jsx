import NovoCard from "../components/NovoCard"
import { useEffect, useState } from 'react'
import "../CardTeste/CardTeste.module.css"
import Header from '../components/Header/index.jsx'
import Footer from '../components/Footer/index.jsx'


function Card2 () {
    const [ repositories, setRepositories ] = useState([])

    useEffect(() => {
        const buscarRepositorios = async () => {
            const response = await fetch('./jogos.json')
            const data = await response.json()
            setRepositories(data.jogos)
        }
        buscarRepositorios()
    }, [])

    return (
        <section>
            {
                repositories.length > 0 ? (
                    <section>
                        {
                            repositories.map((repo) => (
                                
                                
                                
                                
                                <NovoCard

                                    nome={repo.titulo}
                                    dev={repo.desenvolvedor}
                                    publi={repo.publicador}
                                    date={repo.data_de_lancamento}
                                    plata={repo.plataforma}
                                    gen={repo.genero}
                                    imagem_url={repo.imagem_url}
                                />
                                    
                            ))
                        }
                    </section>
                ) : (
                    <p>Carregando...</p>
                )
            }
        </section>
    )
}

export default Card2