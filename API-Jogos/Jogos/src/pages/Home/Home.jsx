import './Home.module.css'
import Footer from '../components/Footer/index.jsx'
import Header from '../components/Header/index.jsx'
import Container from '../components/Container/index.jsx'
import Card2 from '../Card2/index.jsx'

function Home() {
    return (
       <>
        <main>
            <Header />
            <Container/>
            <Card2/>
            <Footer/>
        </main>
       </> 
    )
}
export default Home

