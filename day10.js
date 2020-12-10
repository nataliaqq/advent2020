const day10 = () => {
    const input = day10input.split('\n').map(el => +el)
    input.push(0)
    const inputSorted = input.sort((a,b) => a - b)
    let obj = { 1: [], 2: [], 3: [] }
    inputSorted.forEach((element, index) => {
        const nextElement = input[index+1]
        nextElement ? obj[nextElement - element].push(nextElement) : obj['3'].push(element + 3)
    });
    console.log('day10_1: ', obj['1'].length * obj['3'].length)

}

day10()