export type Game = Cell[]

export interface Session {
    id: string
    game: Game
}

export interface Cell {
    id: number,
    value: string,
    links: number[]
}