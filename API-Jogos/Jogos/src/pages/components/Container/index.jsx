import style from '../Container/Container.module.css'
import Projetos from '../../Projetos/index.jsx'

function Container() {
    return (
        <>
           <div className={style.divbutton}>
          
           <a href="/teste2"> <input type="button" value="AÇÃO-AVENTURA"  /></a>
         <a href="/teste3"> <input type="button" value="ESTRATEGIA-SANDBOX"  /></a> 
           <a href="/teste"> <input type="button" value="RPG DE AÇÃO" /></a>
            <div className={style.diva}>
            <div className={style.button_slide}><a href="https://www.xbox.com/pt-BR"><img className={style.img}   src='../../../src/imagens/xboxxr.png'/></a></div>
            <div className={style.button_nintendo}><a href="https://www.nintendo.com/pt-br/"><img className={style.img}   src='../../../src/imagens/nintendo.png'/></a></div>
            <div className={style.button_play}><a href="https://www.playstation.com/pt-br/"><img className={style.imgplay}   src='../../../src/imagens/play.png'/></a></div>
           
            </div>
           </div>      

          
        </>
    )
}
export default Container