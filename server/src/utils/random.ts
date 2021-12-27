const power = (base: number, exponent: number) : number => {
    if (exponent === 1) {
        return base
    } else {
        return base * power(base, exponent - 1)
    }
}

export const randomNumber = (length: number) : string => {
    const randomNumber = Math.floor(Math.random() * power(10, length))
    let randomNumberString = `${randomNumber}`
    const randomNumberStringLength = randomNumberString.length

    if (randomNumberString.length < length) {
        // Pad with zeroes
        for (let i = 0; i < length - randomNumberStringLength; i++) {
            randomNumberString = `0${randomNumberString}`
        }
    }
    return randomNumberString
}