// TODO: Move this to backend

import { getCells } from "./template"

// These follow scrablle probabilities with a few changes
// S 4 --> 5 +1
// H 2 --> 3 +1
// B 2 --> 3 +1
// V 2 --> 1 -1
const getProbabilities = () => {
    return [
        ...range('A',9),
        ...range('B',3),
        ...range('C',2),
        ...range('D',4),
        ...range('E',12),
        ...range('F',2),
        ...range('G',3),
        ...range('H',3),
        ...range('I',9),
        ...range('J',1),
        ...range('K',1),
        ...range('L',4),
        ...range('M',2),
        ...range('N',6),
        ...range('O',8),
        ...range('P',2),
        ...range('Q',1), // TODO: Make a QU together
        ...range('R',6),
        ...range('S',5),
        ...range('T',6),
        ...range('U',4),
        ...range('V',1),
        ...range('W',2),
        ...range('X',1),
        ...range('Y',2),
        ...range('Z',1),
    ]
}

const range = (val: string, length: number) : string[] => {
    const result : string[] = []
    for (let i = 0; i < length; i++) {
        result.push(val)
    }
    return result
}

export const generateGame = () => {
    const cells = getCells()
    const probabilities = getProbabilities()

    cells.forEach((cell) => {
        const randomNumber = Math.floor(Math.random() * 100)
        cell.value = probabilities[randomNumber]
    })

    console.log(JSON.stringify(cells))
    return cells
}
