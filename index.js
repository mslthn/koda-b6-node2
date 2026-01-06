// let moment = require('moment')

// // let tanggal = moment.format(DD-MM-YYYY)

// // console.log(tanggal)

// // convertTanggal("01-01-2026") //"01/01/2026" => tanggal/bulan/tahun

import moment from "moment";

function convertTanggal(tgl){
  let datetime = moment(tgl, "DD-MM-YYYY", true);
  let formatResult = moment(datetime).format("DD/MM/YYYY");
  if (datetime.isValid()){
    console.log("Tanggal lama : ", tgl);
    console.log("Hasil knversi : ", formatResult);
  } else {
    console.log("Format tanggal tidak valid");
  }
}
convertTanggal("01-12-2026");

// function convertTanggal(tgl){

// }
// // let testDate = "12-12-2024"
// // console.log(moment().date)
// moment().format()
// // console.log(moment(testDate,'mm/dd/yyyy'))

