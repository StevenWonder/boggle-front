import { CellType } from "./types";

const swap = (c1: CellType, c2: CellType, c3: CellType, c4: CellType) => {
    const buffer = c4.value
    c4.value = c3.value
    c3.value = c2.value
    c2.value = c1.value
    c1.value = buffer
}

const cellWithId = (cells: CellType[], id: number) : CellType | undefined => {
    return cells.find((c) => c.id === id)
}

export const rotate = (cells: CellType[]) => {
    swap(
        cellWithId(cells, 1),
        cellWithId(cells, 5),
        cellWithId(cells, 25),
        cellWithId(cells, 21),
    )

    swap(
        cellWithId(cells, 2),
        cellWithId(cells, 10),
        cellWithId(cells, 24),
        cellWithId(cells, 16),
    )

    swap(
        cellWithId(cells, 3),
        cellWithId(cells, 15),
        cellWithId(cells, 23),
        cellWithId(cells, 11),
    )

    swap(
        cellWithId(cells, 4),
        cellWithId(cells, 20),
        cellWithId(cells, 22),
        cellWithId(cells, 6),
    )

    swap(
        cellWithId(cells, 7),
        cellWithId(cells, 9),
        cellWithId(cells, 19),
        cellWithId(cells, 17),
    )

    swap(
        cellWithId(cells, 8),
        cellWithId(cells, 14),
        cellWithId(cells, 18),
        cellWithId(cells, 12),
    )
}