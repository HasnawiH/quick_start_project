
//function polindrome
const polindrome = (string, word) => {
    let count = 0 

    // function Checking 
    const check = (string1) => {
      
        while (string1.length >= word.length){ //looping length srting1 than equal length word
            if (string1.substring(0,word.length) == word){ 
                count ++
            }
          
          string1 = string1.substring(1) // cut index 0
        }
    }

    //call function with a beginning String
    check(string)
    //call function  with the reverse string
    check(string.split('').reverse().join(''))

    //print output
    return `${count} Kali`
} 

//call function
console.log(polindrome('banananana', 'nana'))
