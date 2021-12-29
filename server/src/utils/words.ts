interface Words {
    [key: string]: {
        [key: string]: string[]
    }
}

const words : Words = {}

export const getWords = (sessionId: string) => {
    return words[sessionId]
}

export const createWordList = (id: string) => {
    words[id] = {}
}

export const deleteWordList = (id: string) => {
    delete words[id]
}

// Returns true if added. False if duplicate
export const addWord = (sessionId: string, player: string, word: string) : boolean => {
    try {
        let session = words[sessionId]
        if (session === undefined) {
            words[sessionId] = {}
        }
        if (words[sessionId][player] === undefined) {
            words[sessionId][player] = []
        }
        if (words[sessionId][player].includes(word) === false) {
            words[sessionId][player].push(word)
        } else {
            return false
        }
    } catch (e) {
        // handle error
        console.warn(e)
        throw e
    }
    return true
}

export const getPoints = (word: string) : number => {
    switch (word.length) {
        case 0:
        case 1:
        case 2:
        case 3:
            return 0
        case 4:
            return 1
        case 5:
            return 2
        case 6:
            return 3
        case 7:
            return 5
        case 8:
        default:
            return 8
    }
}