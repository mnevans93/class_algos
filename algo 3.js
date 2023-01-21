function splitArray (inputArr, size) {
    const newArr = []
    while (inputArr.length > 0) {
        newArr.push(inputArr.splice(0, size))
    }
    return newArr
}

console.log(splitArray([1, 2, 3, 4, 5], 2))