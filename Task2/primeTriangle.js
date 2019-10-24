/*Segitiga siku-siku adalah segitiga yang salah satu sudutnya 90o atau sudut siku. Buatlah sebuah program untuk membentuk sebuah segitiga siku-siku.
 
REQUIREMENT:
Input user berupa panjang alas dan tinggi segitiga (alas dan tingginya sama)dengan ketentuan :
0 < Alas/Tinggi < 10Segitiga dibentuk dengan angka prima yang nilainya mulai dari awal setiap barisnya.
Output berupa segitiga siku-siku.*/

// function Prime
const isPrime = number => {
    for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
        if (number % i == 0) return false
    }
    return true
}

//function triangle
const Triangle = (length) => {
    
    // check length
    if (length > 0 && length < 10){
        let temp = ''
        const array = []

        for (let i = 2; array.length < length; i++) {
            //call function prime
            if (isPrime(i)) {
                temp += i
                array.push(temp.trim()) //push to array
            }
        }
        
        array.map(val => console.log(val)) // looping Output
        
    } else console.log('length must higher than 0 and less than 10')

}

//call function triangle
Triangle(5)