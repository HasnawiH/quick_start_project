//function treeImajinatif 
const imajinatif = (high, year) => {

    // chek condition for input high and years
    if (high > 0 && year >0){

        let result = high  //assign result equals variable high

        //Looping Repeats as many years
        for (let i = 0; i < year; i++){

            result = (result * 2) + 1 // assign result update
        }

        //print output
        console.log(`${result} meter`)

        
    } else   console.log(` high and year must higher than 0`) 
}

//call function 
imajinatif(1,2)
