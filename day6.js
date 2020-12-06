const day6 = () => {
    const input = day6input
    const groups = input.split('\n\n')


    const part1 = () => {
        let count = 0
        groups.forEach(group => {
            const groupMod = group.split('\n').join('')

            const uniqAnswers = [...new Set(groupMod)]
            count = count + uniqAnswers.length
        })
        console.log('day6_1: ', count)
    }

    part1()
}

day6()