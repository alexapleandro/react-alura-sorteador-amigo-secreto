import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useListaDeparticipantes } from "../../state/hook/useListaDeParticipantes";
import { useResultadoSorteio } from "../../state/hook/useResultadoSorteio";
import Sorteio from "./Sorteio";

jest.mock('../../state/hook/useListaDeParticipantes', () => {
    return {
        useListaDeparticipantes: jest.fn()
    }
})

jest.mock('../../state/hook/useResultadoSorteio', () => {
    return {
        useResultadoSorteio: jest.fn()
    }
})

describe('na pagina de sorteio', () => {
    const participantes = [
        'joao',
        'pedro',
        'lucas'
    ]

    const resultado = new Map([
        ['joao', 'pedro'],
        ['pedro', 'lucas'],
        ['lucas', 'joao']
    ])

    beforeEach(() => {
        (useListaDeparticipantes as jest.Mock).mockReturnValue(participantes);
        (useResultadoSorteio as jest.Mock).mockReturnValue(resultado);
    })

    test('todos os participantes podem exibir o seu amigo secreto', () => {
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        )

        const opcoes = screen.queryAllByRole('option')
        expect(opcoes).toHaveLength(participantes.length + 1)
    })

    test('o amigo secreto é exibido quando solicitado', () => {
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        )

        const select = screen.getByPlaceholderText('Selecione o seu nome')
        fireEvent.change(select, {
            target: {
                value: participantes[0]
            }
        })

        const botao = screen.getByRole('button')
        fireEvent.click(botao)

        const amigoSecreto = screen.getByRole('alert')

        expect(amigoSecreto).toBeInTheDocument()
    })
})