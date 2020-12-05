
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
        // console.log('row: ', row)
        // console.log('column: ', column)
        return row * 8 + column
    }

    const part1 = () => {
        const id = getSeatId(input[2])
        let codeArray = []
        
        input.forEach(code => {
            codeArray.push(getSeatId(code))
        })
        console.log(codeArray)
        console.log(Math.max(...codeArray))
    }

    part1()
}

day5()