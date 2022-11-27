// Code your solutions in this file
const writeCards = (array, surprise) => {
    let emptyArray = []
    let name = "";

    for (name of array) {
        emptyArray.push(`Thank you, ${name}, for the wonderful ${surprise} gift!`)
    }
    return emptyArray

}

const countDown = (number) => {
    for (let i = number; i >= 0; i--) {
        console.log(i)
    }
}
