const array = [
    {nama : 'Hasnawi', alamat : 'Majene'},
    {nama : 'Haeba', alamat : 'Majene'},
    {nama : 'Awi', alamat : 'Majene'}
]

// show Item
array.map( value => {
    console.log (value)
})

// // push
const pushArray = (array) =>  {
    array.push({nama : 'Awing', alamat : 'Majene'})
    console.log(array)
}

//function Delete Array
const deleteArray = (array) => {
    array.pop()
    console.log(array)
}
    
//function changevalue
const changeValueArray = (array) => {
    array[1] = {
    nama : 'Hasnawi Haeba', alamat : ' Sulawesi Barat'
    }

    console.log(array)
}

pushArray(array)
deleteArray(array)
changeValueArray(array)