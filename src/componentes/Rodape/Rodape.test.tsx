import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import { useListaDeparticipantes } from "../../state/hook/useListaDeParticipantes"
import Rodape from "./Rodape"

jest.mock('../../state/hook/useListaDeParticipantes', () => {
    return {
        useListaDeparticipantes: jest.fn()
    }
})

const mockNavegacao = jest.fn()

const mockSorteio = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: ()  => mockNavegacao
    }
})

jest.mock('../../state/hook/useSorteador', () => {
    return {
        useSorteador: ()  => mockSorteio
    }
})

describe('quando não existem participantes suficientes', () => {
    beforeEach(() => {
        (useListaDeparticipantes as jest.Mock).mockReturnValue([])
    })
    test('a brincadeira não pode ser iniciada', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        )

        const botao = screen.getByRole('button')
        expect(botao).toBeDisabled()
    })
})

describe('quando existem participantes suficientes', () => {
    const participantes = ["joao", "maria", "josefina"]
    beforeEach(() => {
        (useListaDeparticipantes as jest.Mock).mockReturnValue(participantes)
    })
    test('a brincadeira ser iniciada', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        )

        const botao = screen.getByRole('button')
        expect(botao).not.toBeDisabled()
    })
    test('a brincadeira foi iniciada', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        )

        const botao = screen.getByRole('button')
        fireEvent.click(botao)
        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        expect(mockNavegacao).toHaveBeenCalledWith('/sorteio')
        expect(mockSorteio).toHaveBeenCalledTimes(1)
    })
})