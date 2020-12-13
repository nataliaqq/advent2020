const day11 = () => {
    let input = day11input.split('\n').map(item => item.split(''))


    const isEmptyAround = (inp, i, j) => {
        let isEmpty = true
        let d = 1
        for (let x of [i - d, i, i +d]) {
            for (let y of [j - d, j, j + d]) {
                if (!(x === i && y === j)) {
                    if (inp[x] && inp[x][y] === '#') isEmpty = false
                }
            }
        }
        return isEmpty
    }

    const isEmptyAroundNew = (inp, i, j) => {
        let count = 0
        let d = 1
        for (let x of [i - d, i, i +d]) {
            for (let y of [j - d, j, j + d]) {
                if (!(x === i && y === j)) {
                    if (inp[x] && inp[x][y] === '#') count++
                }
            }
        }
        return count === 9
    }

    const isBusyAround = (inp, i, j) => {
        let count = 0
        let d = 1
        for (let x of [i - d, i, i + d]) {
            for (let y of [j - d, j, j + d]) {
                if (!(x === i && y === j)) {
                    if (inp[x] && inp[x][y] === '#') count++
                }
            }
        }

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

    const roundNew = (inp) => {
        let mod = clone(inp)
    
        for (let i = 0; i < inp.length; i++) {
            for (let j = 0; j < inp[0].length; j++) {
                if (inp[i][j] === 'L') {
                    if (isEmptyAroundNew(inp, i,j)) mod[i][j] = '#'
                }

                if (inp[i][j] === '#') {
                    if (isBusyAroundNew(inp, i,j)) mod[i][j] = 'L'
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

    const part2 = () => {
        const recurs = (inp) => {
            const r1 = roundNew(inp)
             
            if (r1.toString() === inp.toString())  {
                return countOccupied(r1)
            }
            
            return recurs(r1)
        }
        console.log('day11_2: ', recurs(input))
    }
    part1()
    part2()
}

day11()