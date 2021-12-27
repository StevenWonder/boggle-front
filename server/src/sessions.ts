import { Session } from "./types"

const sessions : Session[] = []

export const addSession = (session: Session) => {
    sessions.push(session)
}

export const findSession = (id: string) : Session | undefined => {
    return sessions.find((session) => session.id === id)
}

export const removeSession = (id: string) => {
    const index = sessions.findIndex((session) => session.id === id)
    if (index !== -1) {
        sessions.splice(index, 1)
    }
}