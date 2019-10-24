/*Seorang anak dimintai tolong oleh ibunya untuk membeli mie instan di minimarket. Anak tersebut dibekali oleh ibunya uang sebanyak Rp 50.000,00. Di minimarket, mie instan dijual 
dengan harga Rp 2.500,00. Berapakah mie instan yang didapatkan oleh anak tersebut jika
minimarket tersebut sedang mengadakan promosi “setiap pembelian 4 mie instan, akan mendapatkan 
bonus 1 mie instan”?*/

const mieInstan = (harga, uang) => { 
    const total = uang/harga

    //minimal 4
    if (total < 4) console.log(total)

    // than equals 4
    else {
        const bonus = Math.floor(total/4)
        const totalAkhir = total + bonus
        
        console.log(totalAkhir) // printOut 
    }
}

//call function
mieInstan(2500, 10000)

