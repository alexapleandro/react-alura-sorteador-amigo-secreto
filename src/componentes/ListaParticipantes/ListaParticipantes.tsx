import { useListaDeparticipantes } from "../../state/hook/useListaDeParticipantes"

export default function ListaParticipantes(){
    const participantes: string[] = useListaDeparticipantes()
    return(
        <ul>
            {participantes.map(participante => <li key={participante}>{participante}</li>)}
        </ul>
    )
}