/*Jika Tatas telah menikah dan pindah dari Jogja ke Jakarta, serta Pratama direkrut oleh Arkademy menjadi Trainer yang bertempat di Jogja, maka ubahlah object diatas menggunakan spread
operator.*/

//dataArrayOfObject original
const data = [{
                name: 'Tatas',
                company: 'Arkademy',
                job: 'Trainer',
                status: 'single',
                city: 'Jogja'
                },
                {
                name: 'Pratama',
                company: 'Emago',
                job: 'Trainer',
                status: 'single',
                city: 'Jakarta'
                }]

//spreadOperator
const updateData = [
    {...data[0], 
        status :'Married',
        city   :'Jakarta'},
    {...data[1],
        company:'Arkademy',
        city   :'Jogja'}
]

console.log(updateData) //printOutput




