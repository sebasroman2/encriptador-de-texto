let textoUsuario = document.getElementById('entradaDeTexto').value;

/* Verificar si existe algun acento */
function verificarAcentos(texto) {
    let acentos = /[áéíóú]/;
    return acentos.test(texto);
}

/* Indicaciones dadas para las llaves de encriptacion */
function llavesDeEncriptacion(texto) {
    let textoEncriptado = texto.replace(/e/igm, 'enter');
    textoEncriptado = textoEncriptado.replace(/i/igm, 'imes');
    textoEncriptado = textoEncriptado.replace(/a/igm, 'ai');
    textoEncriptado = textoEncriptado.replace(/o/igm, 'ober');
    textoEncriptado = textoEncriptado.replace(/u/igm, 'ufat');
    return textoEncriptado;
}

/* Indicaciones dadas para las llaves de desencriptacion */
function llavesDeDesencriptacion(texto) {
    let textoDesencriptado = texto.replace(/enter/igm, 'e');
    textoDesencriptado = textoDesencriptado.replace(/imes/igm, 'i');
    textoDesencriptado = textoDesencriptado.replace(/ai/igm, 'a');
    textoDesencriptado = textoDesencriptado.replace(/ober/igm, 'o');
    textoDesencriptado = textoDesencriptado.replace(/ufat/igm, 'u');
    return textoDesencriptado;
}

/* Cambios en html despues de darle en encriptar o desencriptar */
function cambiosEnHTML(texto) {
    document.getElementById('salidaImagen').style.display = 'none';
    document.getElementById('salidaH1').style.display = 'none';
    document.getElementById('salidaDeTexto').innerHTML = texto;
    document.getElementById('salidaDeTexto').style.cssText = 'height: 725px; text-align: left';
    document.getElementById('salida').style.cssText = 'justify-content: center; padding-top: 32px; font-size: 24px';
    document.getElementById('salidaBoton').style.display = 'inline';
}

function encriptar() {
    let textoUsuario = document.getElementById('entradaDeTexto').value;
    
    if ((textoUsuario === textoUsuario.toLowerCase()) && (verificarAcentos(textoUsuario) == 0)) {
        cambiosEnHTML(llavesDeEncriptacion(textoUsuario));
    } else {
        alert('Recuerda que solo debes ingresar letras minúsculas y sin acentos');
    }
}

function desencriptar() {
    let textoUsuario = document.getElementById('entradaDeTexto').value;

    if ((textoUsuario === textoUsuario.toLowerCase()) && (verificarAcentos(textoUsuario) == 0)) {
        cambiosEnHTML(llavesDeDesencriptacion(textoUsuario));
    } else {
        alert('Recuerda que solo debes ingresar letras minúsculas y sin acentos');
    }
}

/* Copiar Texto */
document.getElementById('salidaBoton').addEventListener('click', e => {
    document.getElementById('salidaDeTexto').select();
    document.execCommand('copy');
});
