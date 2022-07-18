let dato1 = parseInt(document.getElementById("op1").value);
let dato2 = parseInt(document.getElementById("op2").value);

function sumar() {
    let total = dato1 + dato2;
    document.getElementById("resultado").innerHTML = total;
}

function restar() {
    let total = dato1 - dato2;
    document.getElementById("resultado").innerHTML = total;
}

function multi() {
    let total = dato1 * dato2;
    document.getElementById("resultado").innerHTML = total;
}

function divi() {
    let total = dato1 / dato2;
    document.getElementById("resultado").innerHTML = total;
}
    

function borradoTotal() {

    document.getElementById("op1").innerHTML = (document.getElementById("op1").value = " "); 
    document.getElementById("op2").innerHTML = (document.getElementById("op2").value = " ");
    document.getElementById("resultado").innerHTML=0;
    }

