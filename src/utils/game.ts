import { CellType } from "../types"

export const placeholderGame = (() : CellType[] => {
    const result : CellType[] = []
    for (let i = 1; i < 26; i++) {
        result.push({
            id: i,
            links: [],
            value: '-'
        })
    }
    return result
})()