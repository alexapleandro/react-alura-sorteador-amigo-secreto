import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import ListaParticipantes from "./ListaParticipantes";
import { useListaDeparticipantes } from "../../state/hook/useListaDeParticipantes";

jest.mock('../../state/hook/useListaDeParticipantes', () => {
    return {
        useListaDeparticipantes: jest.fn()
    }
})

describe('uma lista vazia de participantes', () => {
    beforeEach(() => {
        (useListaDeparticipantes as jest.Mock).mockReturnValue([])
    })

    test('deve ser renderizada sem elementos', () => {
        render(
            <RecoilRoot>
                <ListaParticipantes />
            </RecoilRoot>
        )
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(0)
    })
})

describe('uma lista preenchida de participantes', () => {

    const participantes = ["joao", "maria"]
    beforeEach(() => {
        (useListaDeparticipantes as jest.Mock).mockReturnValue(participantes)
    })

    test('deve ser renderizada com elementos', () => {
        render(
            <RecoilRoot>
                <ListaParticipantes />
            </RecoilRoot>
        )
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(participantes.length)
    })
})