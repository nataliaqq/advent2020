const day7 = () => {
    const input = day7input.split(`\n`)
    const myBag = 'shiny gold'

    const bags = input.map(item => {
        const main = item.split('bags contain')[0].slice(0, -1)

        const rule = item.split('bags contain')[1].substring(1)

        const subrules = rule.split(', ')
        
        const subrulesMapped = subrules.map(item => {
            let color = item.replace(/[0-9] /g, '').replace('.', '').replace(' bags', '').replace(' bag', '')
            return { color: color, quantity: parseInt(item) }
        });

        return { color: main, rules: parseInt(rule) ? subrulesMapped : []}
    })

    const part1 = () => {
        const getBagsContainColor = (color) => bags.filter(bag => bag.rules.find(item => item.color === color))

        let result = []
        const recurs = (color) => getBagsContainColor(color).forEach(item => {
            if (item.color) {
                result.push(item.color)
                recurs(item.color)
            }
        })
        recurs(myBag)

        console.log([...new Set(result)])
    }

    part1()
}

day7()