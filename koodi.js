function calcSum(){
    let a = Number(document.getElementById("nro1").value);
    let b = Number(document.getElementById("nro2").value);

    let result = a + b;
    document.getElementById("result").innerHTML = " Yhteenlaskettu summa on " + result;
}