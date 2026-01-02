// let moment = require('moment')

// // let tanggal = moment.format(DD-MM-YYYY)

// // console.log(tanggal)

// // convertTanggal("01-01-2026") //"01/01/2026" => tanggal/bulan/tahun

let moment = require('moment');
let convertTanggal = (tgl) =>{
    let datetime = moment().format('DD/MM/YYYY');
    if (tgl != datetime){
        return moment().format('DD/MM/YYYY')
    }
}
console.log(convertTanggal("01-01-2026"))

// function convertTanggal(tgl){

// }
// // var testDate = "12-12-2024"
// // console.log(moment().date)
// moment().format()
// // console.log(moment(testDate,'mm/dd/yyyy'))
