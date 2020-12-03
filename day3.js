const input = day3input.split('\n')

const day3 = () => {
    const part1 = () => {
        let inputMap = []
        const h = input.length
        const w = input[0].length

        for (let i = 0; i < input.length; i++) {
            const line = input[i]
            for (let j = 0; j < line.length; j++) {
                const element = line[j]
                inputMap.push({
                    element: element,
                    x: j,
                    y: i
                })
            }
        }

        const right = 3 
        const down = 1

        const start = { x: 0, y: 0 }

        let count = 0
        let currentCoord = start
        for (let i = 0; i < input.length; i++) {
            const curerntElement = inputMap.find(elem => elem.x === currentCoord.x % w && elem.y === currentCoord.y).element
            if (curerntElement === '#') {
                count++
            }
            currentCoord.x = currentCoord.x + right
            currentCoord.y = currentCoord.y + down
        }

        console.log('day3_1: ', count)
    }

    part1()
}

day3()