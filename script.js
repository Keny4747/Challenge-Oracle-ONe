function encriptar(){

    var frase = document.getElementById("textoEncriptado").value.toLowerCase();   

    //i = es para que tome letras mayusculas y minusculas
    //g = es para que tome en cuenta toda la linea o la oración
    //m = tome en cuenta multiples lineas 
    //

    var textoEncriptado = frase.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/0/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("textoDesencriptado").innerHTML = 
    textoEncriptado;

}