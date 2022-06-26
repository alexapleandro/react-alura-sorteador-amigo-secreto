import React from 'react'
import { realizarSorteio } from './realizarSorteio'

describe('dado um sorteio de uma amigo secreto', () => {
    test('cada participante não sorteie o próprio nome', () => {

        const participantes = [
            'ana',
            'alex',
            'joao',
            'pedro',
            'lucas',
            'joselito'
        ]

        const sorteio = realizarSorteio(participantes)

        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)
        })

    })
})