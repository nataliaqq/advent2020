
const day5 = () => {
    const input = day5input.split('\n')

    const totalRows = 128
    const totalColumns = 8

    const getSeatId = (code) => {
        let rowsInterval = [0, totalRows - 1]
        let columnsInterval = [0, totalColumns - 1]

        const getLength = () => rowsInterval[1] - rowsInterval[0] + 1
        const getWidth = () => columnsInterval[1] - columnsInterval[0] + 1
    
        code.split('').forEach(letr => {
            switch(letr) {
                case 'F':
                    rowsInterval[1] = rowsInterval[1] - getLength() / 2
                    break;
                case 'B':
                    rowsInterval[0] = rowsInterval[0] + getLength() / 2
                    break;
                case 'R':
                    columnsInterval[0] = columnsInterval[0] + getWidth() / 2
                    break;
                case 'L':
                    columnsInterval[1] = columnsInterval[1] - getWidth() / 2
                    break;
                default:
                    return
            } 
        });
        const row = rowsInterval[0]
        const column = columnsInterval[0]
        const id = row * 8 + column
        // console.log('row: ', row)
        // console.log('column: ', column)
        return id
    }

    let codeArray = []
    input.forEach(code => {
        codeArray.push(getSeatId(code))
    })

    const part1 = () => {
        console.log('day5_1: ', Math.max(...codeArray))
    }

    const part2 = () => {
        let mySeatId
        
        const codeArraySorted = codeArray.sort()
        codeArraySorted.forEach((id, index) => {
            if (id + 1 !== codeArraySorted[index + 1] && index !== codeArraySorted.length - 1) {
                mySeatId = id + 1
            }
        })
        console.log('day5_2: ', mySeatId)
    }

    part1()
    part2()
}

day5()