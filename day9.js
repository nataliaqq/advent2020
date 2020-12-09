const day9 = () => {
    const input = day9input.split(`\n`)
    const preambleNumber = 25
    
    const preamble = (index) => input.slice(index - preambleNumber, index).map(el => parseInt(el))
    
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
    const part1 = () => {
        input.forEach((el, index) => {
            if (findSumElementsByIndex(index).length < 1 && index >= preambleNumber) console.log(el)
        })   
    }
    part1()
}

day9()