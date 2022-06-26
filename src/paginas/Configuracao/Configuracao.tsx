import Cabecalho from "../../componentes/Cabecalho"
import Card from "../../componentes/Card"
import Formulario from "../../componentes/Formulario/Formulario"
import ListaParticipantes from "../../componentes/ListaParticipantes/ListaParticipantes"
import Rodape from "../../componentes/Rodape/Rodape"


const Configuracao = () => {
    return (
        <>
        <Cabecalho />
        <Card>
            <section>
                <h2>Vamos começar!</h2>
                <Formulario />
                <ListaParticipantes />
                <Rodape />
            </section>
        </Card>
        </>
    )
}

export default Configuracao