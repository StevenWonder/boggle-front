import { Cell } from "./types";

type Chain = Cell[]
type ChainList = Chain[]

const filterInvalidChains = (chains: ChainList, length: number) : ChainList => {
    console.log('filterInvalidChains')
    console.log(`number of chains: ${chains.length}`)
    return chains.filter((chain) => {
        if (chain.length !== length) {
            console.log(`length is wrong. Chain lenth: ${chain.length}, word length: ${length}`)
            return false
        }
        // Search for duplicates. If any, invalid chain
        const ids = chain.map((cell) => cell.id)
        const uniqueIds = Array.from(new Set(ids))
        if (ids.length !== uniqueIds.length) {
            return false
        }
        return true
    })
}

export const isValidChain = (cells: Cell[], chain: string) : boolean => {
    return false // TODO
}

const extend = (cells: Cell[], chains: ChainList, char: string) : ChainList => {
    const newChains : ChainList = []
    for (let i = 0; i < chains.length; i++) {
        const chain = chains[i]
        const finalCell = chain[chain.length - 1]
        const newIds = finalCell.links.filter((link) => {
            const cell = cells.find((cell) => cell.id === link)
            return cell.value === char.toUpperCase()
        })
        const newCells = cells.filter((cell) => newIds.includes(cell.id))
        newCells.forEach((newCell) => {
            newChains.push(
                [...chain, newCell]
            )
        })
    }
    return newChains
}

export const getChains2 = (cells: Cell[], word: string) : ChainList => {
    let chains : ChainList = []

    const initialCells = cells.filter((cell) => cell.value === word[0].toUpperCase()) // [11, 14]
    initialCells.forEach((cell) => {
        chains.push([cell])
    })

    for (let i = 1; i < word.length; i++) {
        chains.push(
            ...extend(cells, chains, word[i])
        )
        chains = filterInvalidChains(chains, i+1)
    }

    console.log('CHAINS')
    console.log(JSON.stringify(chains))

    return chains
}

export const getChains = (cells: Cell[], word: string) : number[][] => {
    let chains : number[][] = []
    // for (let i = 0; i < word.length; i++) {
    //     if (i === 0) {
    //         const validCells = cells.filter((cell) => cell.value === word[0])
    //         const validIds = validCells.map((cell) => cell.id)
    //         for (let j = 0; j < validIds.length; j++) {
    //             chains = [...chains, [j]]
    //         }
    //     }
    // }

    // for (let i = 0; i < cells.length; i++) {
    //     if (word[0] === cells[i].value) {
    //         // The first letter is correct. Keep going
    //         const startingCell = cells[i]
    //         for(let j = 1; j < word.length; j++) {
    //             const validCells = startingCell.links.filter((link) => {
    //                 const cell = cells.find((cell) => cell.id === link)
    //                 return cell.value === word[j]
    //             })
    //         }

    //     }
    // }

    return chains
}