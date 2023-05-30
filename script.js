//e --> enter 
//o --> ober 
//i --> imes 
//a -->ai 
//u --> ufat 

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btn-encriptar").addEventListener("click", function(){
        var texto = document.getElementById("inputTexto").value.tolowerCase();
        var txtCifrado = texto.replace(/e/igm,"enter");
        var txtCifrado = txtCifrado.replace(/o/igm,"ober");
        var txtCifrado = txtCifrado.replace(/i/igm,"imes");
        var txtCifrado = txtCifrado.replace(/a/igm,"ai");
        var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

        document.getElementById("imgDer").style.display = "none";
        document.getElementById("texto").style.display = "none";
        document.getElementById("texto2").innerHTML = txtCifrado;
        document.getElementById("copiar").style.display = "show";
        document.getElementById("copiar").style.display = "block";
    });

    document.getElementById("btn-desencriptar").addEventListener("click", function(){
        var texto = document.getElementById("inputTexto").value.tolowerCase();
        var txtCifrado = texto.replace(/enter/igm,"e");
        var txtCifrado = txtCifrado.replace(/ober/igm,"o");
        var txtCifrado = txtCifrado.replace(/imes/igm,"i");
        var txtCifrado = txtCifrado.replace(/ai/igm,"a");
        var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

        document.getElementById("imgDer").style.display = "none";
        document.getElementById("texto").style.display = "none";
        document.getElementById("texto2").innerHTML = txtCifrado;
        document.getElementById("copiar").style.display = "show";
        document.getElementById("copiar").style.display = "block";
    });

    document.getElementById("btn-desencriptar").addEventListener("click", function(){
        var contenido =document.querySelector("#texto2");
        contenido.select();
        document.executeCommand("copiar");
        alert("¡se copio!");
    });
    
});





