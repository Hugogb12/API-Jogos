import style from "../NovoCard/NovoCard.module.css"


function NovoCard({ nome, dev, publi, date, plata, gen, imagem_url }) {
    return (
       
       <div className={style.div}>
               <section className={style.section}>
            <h3>{nome}</h3>
            <p>{dev}</p>
            <p>{publi}</p>
            <p>{date}</p>
            <p>{plata}</p>
            <p>{gen}</p>
            <img className={style.img} src={imagem_url} alt=""/>
            
        </section>
       </div>
       
    )
}

export default NovoCard