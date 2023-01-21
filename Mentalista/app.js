function Chutar(){
    let numeroSecreto = Math.floor(10* Math.random())
    console.log(numeroSecreto)
    let chute = document.getElementById("valor").value
    document.getElementById("resultado").innerHTML = "O numero secreto é : " + numeroSecreto
    let certo = '<img src = "imagens/emoji-acertou.png"> <height="50" width="50">'
    let errado = '<img src = "imagens/emoji-errou.png"> <height="50" width="50">'

    if(chute == numeroSecreto){
        //verdadeiro
        document.getElementById("resultado").innerHTML = '<img src = "imagens/emoji-acertou.png"> <height="50" width="50">'
    }
    else{
        //falso
        document.getElementById("resultado").innerHTML = '<img src = "imagens/emoji-errou.png"> <height="50" width="50">'
    }
}
//1- gerar número aleatório entre 0 e 10 com número secreto
//2- substituir o texto por imagem (carinha feliz e carinha tirste)
//3- Mudar o layout (cores, fundo, fontes)
