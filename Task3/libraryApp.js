/*Sebuah perpustakaan menyimpan data buku-bukunya dalam array of object(key title, author, status).
Buatlah sebuah program yang dapat menampilkan output berdasarkan pilihan:
a. Menampilkan status sebuah buku jika diberikan parameter judul buku tersebut.
b. Menampilkan list buku yang tersedia untuk dipinjam. */

//data
const data = [
    {
        title : 'Crazy Rich Asians',
        author : 'Kevin Kwan',
        status : 'Avaliable'
    },
    {
        title : 'Hujan',
        author : 'Tere Liye',
        status : 'Not Avaliable'
    },
    {
        title : 'I am Sarahza',
        author :'Hanum Salsabiela Rais dan Rangga Almahendra',
        status : 'Not Avaliable'
    },
    {
        title : 'Off The Record',
        author : 'Ria SW',
        status : 'Avaliable'
    }
]

//function title book
const titleBook = (array,cari) => {
    for (let book of array){
        if (book.title == cari){
            console.log(`The title of the search book : ${book.status}`)
        }  
    }
}

//function status book
const bookStatus = (array, Status) => {
    console.log(`Avaliable books are :`)
    for (let book of array){    
        if (book.status == Status){
            console.log(`- ${book.title}`)
        }
    }
}

// variabel input
const title = 'Crazy Rich Asians'
const status = 'Avaliable'


titleBook(data,title) //call function titleBook
console.log(`======================================`)
bookStatus(data,status) //call function bookStatus