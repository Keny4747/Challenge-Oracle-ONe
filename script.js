function encriptar(){

    var frase = document.getElementById("textoEncriptado").value.toLowerCase();   

    //i = es para que tome letras mayusculas y minusculas
    //g = es para que tome en cuenta toda la linea o la oración
    //m = tome en cuenta multiples lineas 
    //

    var textoEncriptado = frase.replace(/e/img, "enter");
    var textoEncriptado = frase.replace(/0/img, "ober");
    var textoEncriptado = frase.replace(/i/img, "imes");
    var textoEncriptado = frase.replace(/a/img, "ai");
    var textoEncriptado = frase.replace(/u/img, "ufat");

}