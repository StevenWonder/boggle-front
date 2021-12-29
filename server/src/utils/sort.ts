interface Results {
    [key: string]: string[]
}

export const sort = (results: Results) : Results => {
    const sorted : Results = {}
    Object.keys(results).forEach((person) => {
        sorted[person] = results[person].sort(
            (first, second) => {
                if (second > first) {
                    return -1
                } else if (second < first) {
                    return 1
                } else {
                    return 0
                }
            }
        )
    })
    return sorted
}