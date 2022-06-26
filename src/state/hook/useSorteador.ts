import { useSetRecoilState } from "recoil"
import { resultadoAmigoSecreto } from "../atom"
import { realizarSorteio } from "../helpers/realizarSorteio/realizarSorteio"
import { useListaDeparticipantes } from "./useListaDeParticipantes"

export const useSorteador = () => {
    const participantes = useListaDeparticipantes()
    const setResultado = useSetRecoilState(resultadoAmigoSecreto)
    return () => {
        const resultado = realizarSorteio(participantes)
        setResultado(resultado)
    }
}