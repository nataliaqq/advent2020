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
        const getAllBags = (color) => getBagsContainColor(color).forEach(item => {
            if (item.color) {
                result.push(item.color)
                getAllBags(item.color)
            }
        })
        getAllBags(myBag)

        console.log('day7_1: ', [...new Set(result)].length)
    }

    const part2 = () => {
        let result = 0;
        const numberBagsInside = (color, quantity) => {
            const currBag = bags.find(item => item.color === color)
            if (currBag.rules === []) return
            currBag.rules.forEach(rule => {
                result = result + (rule.quantity * quantity)
                numberBagsInside(rule.color, rule.quantity * quantity)
            })
        }
        numberBagsInside(myBag, 1)
        console.log('day7_2: ', result)
    }

    part1()
    part2()
}

day7()