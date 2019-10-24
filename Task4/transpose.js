/**Buatlah program yang memiliki parameter sebuah matriks(array 2 dimensi) dan memiliki return berupa transpose dari matriks tersebut.
Contoh input:
1 2 3
4 5 6
7 8 9

Contoh output:
1 4 7
2 5 8
3 6 9
 */

 //data
const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

const transpose = (arr) => {
    return Object.keys(arr[0]).map( function (e) { // looping with index
        return arr.map(function(value) { //looping with value 
            return value[e]; })// printout with value ke index
       })
}

console.log(transpose(array))