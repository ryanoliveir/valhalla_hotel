const body = document.querySelector('body')
let botaoEnviar = document.querySelector('.submit')
botaoEnviar.addEventListener('click', Enviar)
let lista = document.createElement('ul')
body.append(lista)
var cadastrar = document.querySelector('.cadastrar')
cadastrar.addEventListener('click',Cadastrar)
function Cadastrar(){
    window.location.href = "http://localhost:3000/cadastro/";
}
function Enviar(){
    let valorEmail = document.querySelector('#email').value
    let valorSenha = document.querySelector('#password').value
    var i = 0;
    if(valorEmail == '' || valorSenha == ''){
        
    }
    else{
        var condiz = true;
        while(i <= valorEmail.length){
            if(valorEmail[i] === '@' && valorEmail[i] === valorEmail[i].toLowerCase()){
                var condiz2 = true;
            }
            i++
        }
    }
    if(condiz === true && condiz2 === true){
        // let marker = document.createElement('li')
        // lista.append(marker)
        console.log(valorEmail, valorSenha)
    }
        else{
            alert('Por favor, preencha os dados de forma válida')
            var input1 = document.querySelector('#email')
            input1.style.borderColor = 'red'; 
            input2 = document.querySelector('#password')
            input2.style.borderColor = 'red'; 
            setTimeout(function(){ 
                input1.style.borderColor = ''; 
                input2.style.borderColor = ''; 
            }, 1500);
            
        }
   
                

    }