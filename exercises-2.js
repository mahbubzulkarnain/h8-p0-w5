/*
Logic Challenge - Naik Angkot

Problem
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]

Code
function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
*/

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    if(!!!arrPenumpang || !!!arrPenumpang[0] || typeof arrPenumpang[0][0]!='string') return []

    let output = []
    arrPenumpang.forEach(function(penumpang){
        output.push({
            penumpang: penumpang[0],
            naikDari: penumpang[1],
            tujuan: penumpang[2],
            bayar: 0
        })
    })

    let isNaik = false
    let penumpang
    for(let i=0;i<output.length;i++){
        penumpang = output[i]
        rute.forEach(function(ruteName){
            if(ruteName.toLowerCase() == penumpang.naikDari.toLowerCase() && !isNaik){
                isNaik = true
            } else if(ruteName.toLowerCase() == penumpang.tujuan.toLowerCase()){
                isNaik = false
            }
            
            if(isNaik){
                penumpang.bayar+=2000
            }
        })
    }

    return output
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]