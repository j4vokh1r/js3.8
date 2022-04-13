// function addNumber(){
//     console.log(fsnumber + scnumber);
// }

// let fsnumber = Number( prompt('raqam kiriting'));
// let scnumber = Number( prompt('raqam kiriting'));

// addNumber(fsnumber,scnumber)

// function addNumber(fsnumber,scnumber,thnumber){
//     console.log((fsnumber + scnumber) / thnumber);
// }

// let fsnumber = Number( prompt('raqam kiriting'));
// let scnumber = Number( prompt('raqam kiriting'));
// let thnumber = Number( prompt('raqam kiriting'));

// addNumber(fsnumber,scnumber,thnumber)


// function mathrandom(son1,son2){
//     return Math.round((son1 + son2)/2)
// }
// let son1 = Number( prompt('raqam kiriting'));
// let son2 = Number( prompt('raqam kiriting'));

// let x = mathrandom (son1, son2);


// console.log(x);

function valyuta(number,birligi) {
    if (birligi === "usd") {
        return number * 11344.4;
    }
    if (birligi=== "rub") {
        return number * 134.393;
    }else{
        console.log("bizning dastur boshqa pul birligini qo`llamydi");
    }
}

let son = Number(prompt("pul miqdori:"))

let qiymat = prompt("usd,rub,")

let x=valyuta (son,qiymat);

document.write("sizning pul miqdoringiz "+x+" uzs ga teng");



