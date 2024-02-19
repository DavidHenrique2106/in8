import style from './sobre.module.css'

function Sobre() {
    return (
        <section className={style.footer} >
            <main className={style.footer_body} >
                <p>David Henrique B. de Lima</p>
                <p>dh210605@gmail.com</p>
                <p>(81)98318-1645</p>
                <p>Universidade Católica de Pernambuco & Descomplica faculdade</p>
            </main>
        </section>
    )
}

export default Sobre