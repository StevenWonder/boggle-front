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

export const addWord = (sessionId: string, player: string, word: string) => {
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
        }
    } catch (e) {
        // handle error
        console.warn(e)
        throw e
    }
}