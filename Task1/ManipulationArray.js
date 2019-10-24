const array = [
    {nama : 'Hasnawi', alamat : 'Majene'},
    {nama : 'Haeba', alamat : 'Sulbar'},
    {nama : 'Awi', alamat : 'Makassar'}
]

// show Item
array.map( value => {
    console.log (value) // printout value
})

// function push
const pushArray = (array) =>  {
    array.push({nama : 'Awing', alamat : 'Majene'})
    console.log(array)
}

pushArray(array) //call function push

//function Delete Array
const deleteArray = (array) => {
    array.pop()
    console.log(array)
}

deleteArray(array) //call function 
    
//function changevalue
const changeValueArray = (array) => {
    array[1] = {
    nama : 'Hasnawi Haeba', alamat : ' Sulawesi Barat'
    }

    console.log(array)
}
//call function changevalue
changeValueArray(array)