

function sumar() {
    let dato1 = parseInt(document.getElementById("op1").value);
    let dato2 = parseInt(document.getElementById("op2").value);
    let total = dato1 + dato2;
    console.log(total);
    document.getElementById("resultado").innerHTML = total;
}

function restar() {
    let dato1 = parseInt(document.getElementById("op1").value);
    let dato2 = parseInt(document.getElementById("op2").value);
    let total = dato1 - dato2;
    document.getElementById("resultado").innerHTML = total;
}

function multi() {
    let dato1 = parseInt(document.getElementById("op1").value);
    let dato2 = parseInt(document.getElementById("op2").value);
    let total = dato1 * dato2;
    document.getElementById("resultado").innerHTML = total;
}

function divi() {
    let dato1 = parseInt(document.getElementById("op1").value);
    let dato2 = parseInt(document.getElementById("op2").value);
    let total = dato1 / dato2;
    document.getElementById("resultado").innerHTML = total;
}
    

function borradoTotal() {

    document.getElementById("op1").innerHTML = (document.getElementById("op1").value = " "); 
    document.getElementById("op2").innerHTML = (document.getElementById("op2").value = " ");
    document.getElementById("resultado").innerHTML=0;
    }




