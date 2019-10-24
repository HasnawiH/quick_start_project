/*Disediakan 2 buah array yaitu array huruf dan array perintah. Jika array perintah berisi true, maka huruf
yang memiliki indeks yang sama di array huruf akan dicetak. Buatlah sebuah program untuk
menampilkan output berupa huruf yang di print berdasarkan array perintah dengan parameter
berupa array perintah. */


//function mesinPrinter
const mesinPrinter = (perintah) => {
    //dataArray
    const array1 = ['salah','benar']
    const array2 = [false,true]

    for (let i = 0; i <= array1.length; i++){
        if (array2[i] == perintah){
            return array1[i] //Output
        } 
    }
}

//call function 
console.log(mesinPrinter(false))