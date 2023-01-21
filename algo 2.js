function capitalizeFirstLetter (str) {
    const inputStrArr = str.split(' ')
    const capStrArr = []
    inputStrArr.forEach(element => {
        console.log(element)
        capStrArr.push(element.substring(0, 1).toUpperCase() + element.substring(1))
    })
    return capStrArr.join(' ')
}

console.log(capitalizeFirstLetter('this is a sentence'))