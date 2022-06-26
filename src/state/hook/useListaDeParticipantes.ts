import { useRecoilValue } from "recoil"
import { listaParticipantesState } from "../atom"

export const useListaDeparticipantes = () => {
    return useRecoilValue(listaParticipantesState)
}