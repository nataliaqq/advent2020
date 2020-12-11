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

    // part2


    let count = 0
    let seq = []
    inputSorted.forEach((el, index) => {    
        let next = inputSorted[index + 1]
        if (next) seq.push(next - el)
    })

    seq = seq.toString().replaceAll(',','')
    seq = seq.replaceAll( '1111', '7' ).replaceAll( '111', '4' ).replaceAll( '11', '2' )
    seq = seq.replaceAll( '3', '' ).replaceAll( '1','' )
    
    const v = seq.split('').map(x => parseInt(x)).reduce( (a, b) => a * b )
    console.log('day10_2: ', v)

}

day10()