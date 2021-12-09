var botao = document.querySelector('.submit')
var w = 0;
botao.addEventListener('click', Cadastrar)
var pattern = "[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+$"
var pattern2 = "/^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/"
var cadastrar = document.querySelector('.cadastrar')
cadastrar.addEventListener('click',Logar)


const sendToServer = async(nome, email, password) => {
    const data = {nome, email, password}

    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }

    const response = await fetch('/register', options)
    console.log(response)
    location.href = '/home'
}




function Logar(){
    window.location.href = "http://localhost:3000/login/";
}
function Cadastrar(){ //criação da função Cadastrar
    let i = 0 //variável LOCAL i, diferente da nossa variável global, também i. Só funciona dentro desse escopo {} de função.
    let w = 0;
    var arrayValores = [] //array de valores do tipo global e vazio
    
    while(i <= 3){ //laço de repetição WHILE (enquanto i for menor que 7)
        var valor = document.querySelector('#entrada'+i).value //seleção dos meus inputs através do ID deles, concatenando com o valor de i (entrada1, entrada2...)
        arrayValores.push(valor)//array de valores recebe o valor digitado (e selecionado antes) digitado nos nossos inputs
        console.log(arrayValores[i]) //opcional, só para testarmos se ele está pegando o valor de cada input mesmo.
        i++//i=i+1
    }//fim do laço while
    if(arrayValores[0].match(pattern) && arrayValores[0][0].match(pattern) && arrayValores[0] != ''){//verifica se dentro do meu array de valores, na posição [0] (nome digitado), está de acordo com o padrão de caracteres que guardamos na pattern
      //e verifica também, se a letra inicial do nosso nome (posição [0] da posição [0]), está de acordo com o padrão.
      //console.log('Isso é de fato um nome válido')//imprime só para testarmos, se essa verificação foi feita.
    }//fim do IF match
    if(arrayValores[2] === arrayValores[3] && arrayValores[2] != '' && arrayValores[3] != ''){
      console.log('as senhas se confirmam')
    }else{
        alert('As senhas não se confirmam!')
    }
  
    if(arrayValores[1] == '' || arrayValores[1][0] == ''){
    }
    else{
          while(w <= arrayValores[1].length){
              //console.log(arrayValores[1][w])
              if(arrayValores[1][w] === '@' && arrayValores[1][0] != '@' && arrayValores[1][w] != ''){
                  console.log('é um email')
              }
              w++
      }
    }

    sendToServer(arrayValores[0], arrayValores[1], arrayValores[2])
}