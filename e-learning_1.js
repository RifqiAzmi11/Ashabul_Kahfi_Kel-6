let kunci_jawaban = ["jawaban_1b","jawaban_2b","jawaban_3b","jawaban_4d","jawaban_5a"]
let soal = {"soal1" : {"persoalan" : "Pernyataan yang digunakan untuk mengulang blok kode tertentu selama kondisi terpenuhi disebut sebagai: ",
                        "jawabanA" : "Percabangan",
                        "jawabanB" : "Perulangan",
                        "jawabanC" : "Fungsi",
                        "jawabanD" : "Kondisi",
                        "jawabanBenar" : "JawabanB"},
             "soal2" : {"persoalan" : "Perulangan yang akan dijalankan berulang kali sampai kondisi tertentu tercapai disebut sebagai ",
                        "jawabanA" : "Perulangan while",
                        "jawabanB" : "Perulangan for",
                        "jawabanC" : "Perulangan do-while",
                        "jawabanD" : "Perulangan if",
                        "jawabanBenar" : "JawabanB"}
    }




let jawaban = "e"

function funcJawabanA() {
    jawaban = "JawabanA"
    cekJawaban()
}

function funcJawabanB() {
    jawaban = "JawabanB"
    cekJawaban()
}

function funcJawabanC() {
    jawaban = "JawabanC"
    cekJawaban()
}

function funcJawabanD() {
    jawaban = "JawabanD"
    cekJawaban()
}
let nomorSoal = 1



function cekJawaban(){
    console.log(nomorSoal)
    console.log("Test")
    document.querySelector(".soale").innerHTML = soal[`soal${nomorSoal}`]["persoalan"]
    document.querySelector(".jawaban1 > p").innerHTML = soal[`soal${nomorSoal}`]["jawabanA"]
    document.querySelector(".jawaban2 > p").innerHTML = soal[`soal${nomorSoal}`]["jawabanB"]
    document.querySelector(".jawaban3 > p").innerHTML = soal[`soal${nomorSoal}`]["jawabanC"]
    document.querySelector(".jawaban4 > p").innerHTML = soal[`soal${nomorSoal}`]["jawabanD"]

    
    if(jawaban == soal[`soal${nomorSoal}`]["jawabanBenar"]){
        console.log("Benar")
    }

    nomorSoal += 1
    }

    

    






//Function
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;}

function randomFloat(min, max, decimals) {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);
    return parseFloat(str);}