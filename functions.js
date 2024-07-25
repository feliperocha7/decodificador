let palavra = "";
let palavra1 = "";
let palavra2= "";

const limpar = () =>{
    palavra = "";
    palavra1 = "";
    palavra2 = "";
}

const encriptar = () => {
    let texto = document.getElementById('texto');
    palavra = texto.value;
    if(palavra != ""){
        document.getElementById("mensagem").style.display = "none";
        document.getElementById("codificado").style.display = "flex";
        var paragrafo = document.getElementById("texto_codificado1");
        paragrafo.textContent = criptografar(palavra);
        limpar();
    }else{
        alert("Digite algo para codificar!");
    }
}

const desencriptar = () => {
    let texto = document.getElementById('texto');
    palavra = texto.value;
    if(palavra != ""){
        document.getElementById("mensagem").style.display = "none";
        document.getElementById("codificado").style.display = "flex";
        var paragrafo = document.getElementById("texto_codificado1");
        paragrafo.textContent = descriptografar(palavra);
        limpar();
    }else{
        alert("Digite algo para descodificar!");
    }
}

async function copiar(){
    let texto = document.getElementById('texto_codificado1').innerText;
    await navigator.clipboard.writeText(texto);
}

const criptografar = (texto) =>{
    limpar();
    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "e"){
            palavra1 = palavra1 + "enter";
        }else if(texto[i] == "i"){
            palavra1 = palavra1 + "imes";
        }else if(texto[i] == "a"){
            palavra1 = palavra1 + "ai";
        }else if(texto[i] == "o"){
            palavra1 = palavra1 + "ober";
        }else if(texto[i] == "u"){
            palavra1 = palavra1 + "ufat";
        }else if(texto[i] == " "){
            palavra1 = palavra1 + " ";
        }else{
            palavra1 = palavra1 + texto[i];
        }
    }
    return palavra1;
}

const descriptografar = (texto) =>{
    limpar();
    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "e"){
            palavra2 = palavra2 + "e";
            i += 4;
        }else if(texto[i] == "i"){
            palavra2 = palavra2 + "i";
            i += 3;
        }else if(texto[i] == "a"){
            palavra2 = palavra2 + "a";
            i++;
        }else if(texto[i] == "o"){
            palavra2 = palavra2 + "o";
            i += 3;
        }else if(texto[i] == "u"){
            palavra2 = palavra2 + "u";
            i += 3;
        }else if(texto[i] == " "){
            palavra2 = palavra2 + " ";
        }else{
            palavra2 = palavra2 + texto[i];
        }
    }
    return palavra2;
}