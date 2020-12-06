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

    const part2 = () => {
        let count = 0
        groups.forEach(group => {
            const uniqAnswers = [...new Set(group.split('\n').join(''))]
            const groupByPersons = group.split('\n')
            uniqAnswers.forEach(answer => {
                let everyPersonHasAnswer = true
                groupByPersons.forEach(person => {
                    if (person.indexOf(answer) === -1) everyPersonHasAnswer = false
                })
                if (everyPersonHasAnswer) count++
            })
        })
        console.log('day6_2: ', count)
    }

    part1()
    part2()
}

day6()