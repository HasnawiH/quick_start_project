/**Dalam ilmu statistika, kita menggunakan mean untuk menemukan nilai rata—rata sebuah array atau
kumpulan nilai, median untuk menentukan nilai tengah di array nilai, dan modus untuk
menemukan nilai manakah pada array yang muncul paling banyak. Buatlah sebuah program
yang dapat menghasilkan output berupa nilai mean, median dan modus dengan parameter
berupa array nilai.Dalam ilmu statistika, kita menggunakan mean untuk menemukan nilai rata—rata sebuah array atau
kumpulan nilai, median untuk menentukan nilai tengah di array nilai, dan modus untuk
menemukan nilai manakah pada array yang muncul paling banyak. Buatlah sebuah program
yang dapat menghasilkan output berupa nilai mean, median dan modus dengan parameter
berupa array nilai. */


let data = [3,3,4,1,5,3,2,2,1,1]

//Sorting Array
data.sort( (a,b) => {
    return a-b
} )


//function Mean
const mean = (array) => {
    let reduce = array.reduce((a,b) => a + b)
    let result = Math.floor(reduce / array.length)
    return `Mean : ${result}`
}

//function Median
const median = (arr) => {
   
    if(arr.length%2 === 0) {
        const angka1 = arr[arr.length/2-1];
        const angka2 = arr[(arr.length/2)];
        let hasil = (angka1+angka2)/2;
        return `Median : ${hasil}`;

      } else {
        let hasil2 = arr[Math.floor(arr.length/2)];
        return `Median : ${hasil2}`      
    }
}

//function Modus  [3,3,4,1,5,3,2,2,1,1]
const modus = (arr) => {
    let count = 0;
    let modus;
    for(let i = 0; i< arr.length; i++){
        let newCount = 0;
        for(let j = 0; j< arr.length;j++){
            if(arr[i] == arr [j] && i != j){
                newCount++;
                if(newCount > count){
                    count = newCount;
                    modus = arr[i];
                }
            }
        }
    }
    
    if (modus == undefined){
        return -1;
    } else if(newCount == arr.length-1){
        return -1;
    }
  
  return `Modus : ${modus}`;
}

console.log(mean(data))
console.log(median(data))
console.log(modus(data))
