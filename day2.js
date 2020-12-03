const day2 = () => {
    const input = day2input.split('\n')
    const inputMapped = input.map(str => {
        const parsed = str.replace(':', '').split(' ')
        return {
            num1: parsed[0].split('-')[0],
            num2: parsed[0].split('-')[1],
            symbol: parsed[1],
            pwd: parsed[2]
        }
    })

    const part1 = () => {
        let finalCount = 0
        inputMapped.forEach((input) => {
            const { pwd, num1: min, num2: max, symbol } = input
            
            let foundSymbolsInPassword = 0
            pwd.split('').forEach((symb, index) => symb === symbol ? foundSymbolsInPassword++ : null)

            const condition = foundSymbolsInPassword >= min && foundSymbolsInPassword <= max
            if (condition) finalCount++
        })

        console.log('day2_1:', finalCount)
    }

    const part2 = () => {
        let count = 0
        inputMapped.forEach((input) => {
            const { pwd, num1, num2, symbol } = input
            const a = pwd[num1 - 1]
            const b = pwd[num2 - 1]

            const condition = (a === symbol ^ b === symbol)

            if (condition) count++
        })

        console.log('day2_2:', count)
    }

    part1()
    part2()
}

day2()