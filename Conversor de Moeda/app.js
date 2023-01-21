function ConversorDeDolarParaReal(){
    let valorEmDolar = document.getElementById("valor").value
    let valorConvertido = valorEmDolar * 5.3
    document.getElementById("valorConvertido").innerText = valorConvertido.toFixed(2)
}
