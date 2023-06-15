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
                        "jawabanBenar" : "JawabanA"},
            "soal3" : {"persoalan" : "Berikut yang digunakan untuk mengevaluasi beberapa kondisi secara berurutan adalah: ",
                        "jawabanA" : "if-else statement ",
                        "jawabanB" : "if statement ",
                        "jawabanC" : "elif statement ",
                        "jawabanD" : "for statement",
                        "jawabanBenar" : "JawabanC"},
            "soal4" : {"persoalan" : "Pernyataan yang digunakan untuk menghentikan perulangan dan keluar dari pernyataan pengulangan adalah ",
                        "jawabanA" : "break",
                        "jawabanB" : "continue",
                        "jawabanC" : "pass ",
                        "jawabanD" : "exit",
                        "jawabanBenar" : "JawabanA"},
            "soal5" : {"persoalan" : "Pernyataan yang digunakan untuk mengeksekusi serangkaian pernyataan tergantung pada kondisi yang diberikan adalah:  ",
                        "jawabanA" : "Percabangan ",
                        "jawabanB" : "Perulangan",
                        "jawabanC" : "Fungsi",
                        "jawabanD" : "Kondisi",
                        "jawabanBenar" : "JawabanA"},
            "soal6" : {"persoalan" : "Apa output dari kode berikut? <br><br> for i in range(1, 6): <br>&emsp;if i == 3: <br>&emsp;&emsp;continue <br>&emsp;print(i)" ,
                        "jawabanA" : "1 2 3 4 5",
                        "jawabanB" : "1 2 4 5 ",
                        "jawabanC" : "1 2 3 4 ",
                        "jawabanD" : "1 2 3 4 5 6",
                        "jawabanBenar" : "JawabanB"},
            "soal7" : {"persoalan" : "Tentukan ouput dari code dibawah ini <br><br> x = 10 <br><br>if x > 5: <br>&emsp;print('x lebih besar dari 5') <br>elif x < 5: <br>&emsp;print('x kurang dari 5')<br>else:<br>&emsp;print('x sama dengan 5')" ,
                        "jawabanA" : "x lebih besar dari 5 ",
                        "jawabanB" : "x kurang dari 5 ",
                        "jawabanC" : "x sama dengan 5 ",
                        "jawabanD" : "Tidak ada output",
                        "jawabanBenar" : "JawabanA"},
            "soal8" : {"persoalan" : "Apa ouput dari code dibawah ini <br><br>numbers = [1, 2, 3, 4, 5]<br>for num in numbers:<br>&emsp;if num % 2 == 0:<br>&emsp;&emsp;print(num)" ,
                        "jawabanA" : "1 2 3 4 5 ",
                        "jawabanB" : "1 3 5 ",
                        "jawabanC" : "2 4",
                        "jawabanD" : "Tidak ada output",
                        "jawabanBenar" : "JawabanC"},
            "soal9" : {"persoalan" : "Loop 'for' digunakan ketika" ,
                        "jawabanA" : "Kita ingin menjalankan kode berdasarkan kondisi tertentu",
                        "jawabanB" : "Kita ingin mengulang kode sebanyak nilai yang ditentukan ",
                        "jawabanC" : "Kita ingin memeriksa beberapa kondisi dalam satu blok kode",
                        "jawabanD" : "Kita ingin membagi kode ke dalam beberapa fungsi",
                        "jawabanBenar" : "JawabanB"},
            "soal10" : {"persoalan": "Kapan loop 'while' akan berhenti menjalankan kode?" ,
                        "jawabanA" : "Ketika kondisi yang diberikan terpenuhi ",
                        "jawabanB" : "Ketika jumlah pengulangan tertentu tercapai ",
                        "jawabanC" : "Ketika blok kode dalam loop selesai dieksekusi",
                        "jawabanD" : "Ketika kita ingin menghentikan loop secara paksa",
                        "jawabanBenar" : "JawabanA"}
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


let nilai = 0
function cekJawaban(){

    if(jawaban == soal[`soal${nomorSoal}`]["jawabanBenar"]){
        document.querySelector(`.${jawaban}`).style.background="green"
        nilai += 10
    }
    else{
        document.querySelector(`.${jawaban}`).style.background="red"
    }
   

    
    
    console.log(nomorSoal)
    console.log("Test")
    console.log(jawaban)
    setTimeout(function (){
        document.querySelector(`.${jawaban}`).style.background="grey"
        document.querySelector(".soale").innerHTML = soal[`soal${nomorSoal}`]["persoalan"]
        document.querySelector(".JawabanA > p").innerHTML = soal[`soal${nomorSoal}`]["jawabanA"]
        document.querySelector(".JawabanB > p").innerHTML = soal[`soal${nomorSoal}`]["jawabanB"]
        document.querySelector(".JawabanC > p").innerHTML = soal[`soal${nomorSoal}`]["jawabanC"]
        document.querySelector(".JawabanD > p").innerHTML = soal[`soal${nomorSoal}`]["jawabanD"]
    },500)
    document.querySelector(".skor > p").innerHTML = nilai
    console.log("nilai",nilai)
    
    localStorage.setItem("latihan", nilai);
    nomorSoal += 1;
    if(nomorSoal==11){
        var done = document.getElementById("selesai");
        done.style.display="block";
        document.querySelector(".soal").style.display="none";
        document.querySelector(".JawabanA").style.display="none";
        document.querySelector(".JawabanB").style.display="none";
        document.querySelector(".JawabanC").style.display="none";
        document.querySelector(".JawabanD").style.display="none";

    }   
}



function tampilkanSoal(){
    
    document.querySelector(".kumpulanSoal").style.display="flex"
    document.querySelector(".soal").style.display="block"
    document.querySelector(".mulai").style.display="none"
    document.querySelector(".soale").innerHTML = soal["soal1"]["persoalan"]
    document.querySelector(".JawabanA > p").innerHTML = soal["soal1"]["jawabanA"]
    document.querySelector(".JawabanB > p").innerHTML = soal["soal1"]["jawabanB"]
    document.querySelector(".JawabanC > p").innerHTML = soal["soal1"]["jawabanC"]
    document.querySelector(".JawabanD > p").innerHTML = soal["soal1"]["jawabanD"]
    if(jawaban == soal["soal1"]["jawabanBenar"]){
        console.log("Bujur")

    }

}


const navbarMenu = document.getElementById('navbarMenu');
const content = document.getElementsByClassName('content')[0];

navbarMenu.addEventListener('mouseover', function() {
    navbarMenu.style.left = '0';
    ;
});

navbarMenu.addEventListener('mouseout', function() {
    navbarMenu.style.left = '-200px';
    content.style.marginLeft = '0';
});

function changeBackground() {
    document.body.classList.toggle("clicked");
    document.p.classList.toggle("clicked");

}
    
