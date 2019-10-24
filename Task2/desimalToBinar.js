// function Desimal To Binar
const desimal = (num) => {

    let array = []

    for (let i = num; i > 0; i = parseInt(i/2)){
        //push to variable array with result i modulus 2
        array.push(i%2)
    }

    return array.reverse().join('') // print output
}

//call function
console.log(desimal(12))

