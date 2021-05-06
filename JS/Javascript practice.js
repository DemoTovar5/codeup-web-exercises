// function cube(n) {
//     return n * n * n ;
// }
//
// console.log(cube(4))
//
// function cubeRoot(n) {
// return Math.cbrt(n)
// }
//
// console.log(cubeRoot(64))

function remainder(input1,input2) {
    if (Number(input1) && Number(input2)) {
        return input1 % input2
    } else {
        return "This is not a number"
    }

}

console.log(remainder(9,2))