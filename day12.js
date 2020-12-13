const day12 = () => {
    const input = day12input.split('\n')
    const directions = ['E', 'S', 'W', 'N']

    let current = {
        face: 'E',
        coordinate: [0,0]
    }

    // console.log(current)
    for (let i = 0; i < input.length; i++) {
        let letter = input[i][0]
        const value = parseInt(input[i].slice(1, input.length))
        if (letter === 'F') letter = current.face
        switch (letter) {
            case 'N': 
                current.coordinate[0] += value
                break;
            case 'S': 
                current.coordinate[0] -= value
                break;
            case 'E': 
                current.coordinate[1] += value
                break;
            case 'W':
                current.coordinate[1] -= value
                break;
            case 'L':
                let i = (directions.findIndex(el => el === current.face) - (value / 90)) % 4
                current.face = directions[i < 0 ? i + 4 : i]
                break;
            case 'R':
                let j = (directions.findIndex(el => el === current.face) + (value / 90)) % 4
                current.face = directions[j < 0 ? j + 4 : j]
                break;
        }
    }

    console.log('day12_1: ', Math.abs(current.coordinate[0]) + Math.abs(current.coordinate[1]))


}

day12()