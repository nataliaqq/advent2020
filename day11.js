const day11 = () => {
    let input = day11input.split('\n').map(item => item.split(''))


    const isEmptyAround = (inp, i, j) => {
        let isEmpty = true
        if (inp[i][j-1] === '#') isEmpty = false
        if (inp[i][j+1] === '#') isEmpty = false
        if (inp[i+1] && inp[i+1][j-1] === '#') isEmpty = false
        if (inp[i+1] && inp[i+1][j] === '#') isEmpty = false
        if (inp[i+1] && inp[i+1][j+1]  === '#') isEmpty = false
        if (inp[i-1] && inp[i-1][j-1] === '#') isEmpty = false
        if (inp[i-1] && inp[i-1][j] === '#') isEmpty = false
        if (inp[i-1] && inp[i-1][j+1] === '#') isEmpty = false

        return isEmpty
    }

    const isBusyAround = (inp, i, j) => {
        let count = 0
        if (inp[i][j-1] === '#') count++
        if (inp[i][j+1] === '#') count++
        if (inp[i+1] && inp[i+1][j-1] === '#') count++
        if (inp[i+1] && inp[i+1][j] === '#') count++
        if (inp[i+1] && inp[i+1][j+1]  === '#') count++
        if (inp[i-1] && inp[i-1][j-1] === '#') count++
        if (inp[i-1] && inp[i-1][j] === '#') count++
        if (inp[i-1] && inp[i-1][j+1] === '#') count++

        return count >= 4
    }

    const clone = (items) => items.map(item => Array.isArray(item) ? clone(item) : item);

    const round = (inp) => {
        let mod = clone(inp)
    
        for (let i = 0; i < inp.length; i++) {
            for (let j = 0; j < inp[0].length; j++) {
                if (inp[i][j] === 'L') {
                    if (isEmptyAround(inp, i,j)) mod[i][j] = '#'
                }

                if (inp[i][j] === '#') {
                    if (isBusyAround(inp, i,j)) mod[i][j] = 'L'
                }
            }
        }
        return mod
    }

    const countOccupied = (inp) => {
        let count = 0
        for (let i = 0; i < inp.length; i++) {
            for (let j = 0; j < inp[0].length; j++) {
                if (inp[i][j] === '#') count++
            }
        }
        return count
    }

    const part1 = () => {
        const recurs = (inp) => {
            const r1 = round(inp)
             
            if (r1.toString() === inp.toString())  {
                return countOccupied(r1)
            }
            
            return recurs(r1)
        }
        console.log('day11_1: ', recurs(input))
    }
    part1()
}

day11()