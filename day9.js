const day9 = () => {
    const input = day9input.split(`\n`).map(el => parseInt(el))
    const preambleNumber = 25
    
    const preamble = (index) => input.slice(index - preambleNumber, index)
    
    const findSumElementsByIndex = (elemIndex) => {
        let arr = []

        preamble(elemIndex).forEach((element, index) => {
            let pair = preamble(elemIndex).find(el => input[elemIndex] - el === element)
            let pairIndex = preamble(elemIndex).findIndex(el => input[elemIndex] - el === element)
            if (pair && pairIndex !== index) {
                arr.push(pair)
                arr.push(element)
            }
        })
        return [...new Set(arr)]
    }

    const findWeak = () => {
        let found
        input.forEach((el, index) => {
            if (findSumElementsByIndex(index).length < 1 && index >= preambleNumber) found = el
        })
        return found
    }

    const part1 = () => {
        console.log('day9_1: ', findWeak())
    }

    const part2 = () => {
        const weak = findWeak()
        let foundSet

        const sumOfArray = (arr) => {
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            return arr.reduce(reducer)
        }
        
        input.forEach((element, index) => {
            for (let len = 2; len <= input.length - index; len++) {
                let arr = input.slice(index, index + len)
                if (sumOfArray(arr) === weak) {
                    foundSet = arr
                }
            }
        })

        let min = foundSet.sort((a, b) => a - b)[0]
        let max = foundSet.sort((a, b) => a - b)[foundSet.length - 1]

        console.log('day9_2: ', min + max)
    }
    part1()
    part2()
}

day9()