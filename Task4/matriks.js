/**Buatlah program yang memiliki parameter 2 buah matriks dan memiliki return berupa hasil perkalian dari kedua matriks tersebut (sertakan juga error handling untuk pelanggaran dalam peraturan perkalian matriks)
Contoh input: 
A = 
3 4
1 2

B =
7 5
6 4

Contoh output:
AxB=
45 31
19 13
 */

 // Data
const arrayA = [
    [3, 4],
    [1, 2]
]

const arrayB =[
    [7, 5],
    [6, 4]
]

//function matriks
const matriks = (arrA,arrB) => {
    // check length row arrayA index 0 and length arrayB
    if (arrA[0].length == arrB.length){

        //assign result equal array empty
        let result = []
        for (let i = 0; i < arrA.length; i++){
            //assign result index i
            result[i] = []

            for (let j = 0; j < arrB[0].length; j++){
                let temp = 0
                for (let x = 0; x < arrB[0].length; x++ ){
                    temp += arrA[i][x] * arrB[x][j]
                }

                //assign result update
                result[i][j] = temp
            }
        }

        //return output
        return result

    } else return `Matriks is not compatible`
}

//call function
console.log(matriks(arrayA,arrayB))