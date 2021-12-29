export interface CellType {
    id: number,
    value: string,
    links: number[]
}

export interface WordResult {
    isValid: boolean,
    word: string,
    reason: string,
    points: number
}