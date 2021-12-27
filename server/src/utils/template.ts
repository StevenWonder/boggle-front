import { Cell } from "../types"

const TWENTY_FIVE = (function() {
    const result : number[] = []
    for (let i = 1; i < 26; i++) {
        result.push(i)
    }
    return result
})()

const addLink = (cell: Cell, num: number) => {
    cell.links.push(num)
}

const rightLink = (cells: Cell[]) => {
    cells.forEach((cell) => {
        addLink(cell, cell.id + 1)
    })
}

const leftLink = (cells: Cell[]) => {
    cells.forEach((cell) => {
        addLink(cell, cell.id - 1)
    })
}

const upLink = (cells: Cell[]) => {
    cells.forEach((cell) => {
        addLink(cell, cell.id - 5)
    })
}

const downLink = (cells: Cell[]) => {
    cells.forEach((cell) => {
        addLink(cell, cell.id + 5)
    })
}

const upLeftLink = (cells: Cell[]) => {
    cells.forEach((cell) => {
        addLink(cell, cell.id - 6)
    })
}

const upRightLink = (cells: Cell[]) => {
    cells.forEach((cell) => {
        addLink(cell, cell.id - 4)
    })
}

const downLeftLink = (cells: Cell[]) => {
    cells.forEach((cell) => {
        addLink(cell, cell.id + 4)
    })
}

const downRightLink = (cells: Cell[]) => {
    cells.forEach((cell) => {
        addLink(cell, cell.id + 6)
    })
}

const cellsWithId = (cells: Cell[], ids: number[]) : Cell[] => {
    return cells.filter((cell) => ids.includes(cell.id))
}

const without = <T>(array: T[], removes: T[]) : T[] => {
    return array.filter((value) => !removes.includes(value))
}

export const getCells = () => {
    const cells : Cell[] = []
    for (let i = 1; i < 26; i++) {
        cells.push({
            id: i,
            value: 'TODO',
            links: []
        })
    }

    leftLink(cellsWithId(cells, without(TWENTY_FIVE, [1, 6, 11, 16, 21])))
    rightLink(cellsWithId(cells, without(TWENTY_FIVE, [5, 10, 15, 20, 25])))
    upLink(cellsWithId(cells, without(TWENTY_FIVE, [1, 2, 3, 4, 5])))
    downLink(cellsWithId(cells, without(TWENTY_FIVE, [21, 22, 23, 24, 25])))

    upLeftLink(cellsWithId(cells, without(TWENTY_FIVE, [1, 2, 3, 4, 5, 6, 11, 16, 21])))
    downLeftLink(cellsWithId(cells, without(TWENTY_FIVE, [1, 6, 11, 16, 21, 22, 23, 24, 25])))
    upRightLink(cellsWithId(cells, without(TWENTY_FIVE, [1, 2, 3, 4, 5, 10, 15, 20, 25])))
    downRightLink(cellsWithId(cells, without(TWENTY_FIVE, [5, 10, 15, 20, 21, 22, 23, 24, 25])))
    return cells
}
