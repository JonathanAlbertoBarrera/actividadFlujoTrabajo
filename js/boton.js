function colorAleatorio() {
    const letras = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

function cambiarColor(){
    const nuevoColor = colorAleatorio();
    document.body.style.backgroundColor = nuevoColor;
}