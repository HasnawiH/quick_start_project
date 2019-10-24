/**Sebuah program memiliki fungsi untuk membaca array of numbers dan menjumlahkan seluruh member dari array tersebut sehingga hasilnya hanya berupa satu digit saja. Buatlah function untuk merealisasikan program tersebut.
Contoh INPUT : [123, 9, 27]
Contoh OUTPUT: 6
Proses Function: 
123 + 9 + 27 = 159
1 + 5 + 9 = 15
1 + 5 = 6
 */
//data
let array = [123,9,27]

//function
const add = (arr1) => {

    let temp = 0

    //addArray
    arr1.map( e => {
        temp += e
    })
    
    //toArray
    temp = temp.toString().split('').map(Number)

    //assign 
    array = temp

    //condition for print
    if (array.length == 1){
        console.log(Number(array.join('')))
    }

}

// call function
while(array.length > 1){
       add(array)
}



