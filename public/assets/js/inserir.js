var envio = document.querySelector('#button')
envio.addEventListener('click',Enviar)
var listona = document.querySelector('#lista')
var body = document.querySelector('body')
var i = 0
var u = 0
var k = 0
var l = 0
var j = 0

const sendToSever = async (numero_pessoas, quarto, data) => {
    const data_api = {numero_pessoas, quarto, data}
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data_api)
    }


    const response = await fetch('/datahotel/insert', options)
}

function Enviar(){
    var pessoas = document.querySelector('#pess').value
    var quarto = document.querySelector('#qua').value
    var datas = document.querySelector('#date').value
    //console.log(datas)
    //console.log(pessoas)
    //console.log(quarto)
    var elemento = document.createElement('li')
    var elemento2 = document.createElement('button')
    var elemento3 = document.createElement('button')
    listona.append(elemento)
    listona.append(elemento2)
    listona.append(elemento3)
    elemento3.setAttribute('id',k++)
    elemento2.setAttribute('id',u++)
    elemento.setAttribute('id', i++)
    elemento.innerHTML = 'Data: '+datas+' Número de pessoas: '+pessoas+' Tipo de quarto: '+quarto
    elemento2.innerHTML = 'EXCLUIR'
    elemento3.innerHTML = 'SELECIONE PARAR ALTERAR'
    elemento2.addEventListener('click',Excluir)
    elemento3.addEventListener('click',Alterar)
    async function Excluir(){

        if(u==i){
            elemento.remove()
            elemento2.remove()
            elemento3.remove()
        }

        const options = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }

        const response = await fetch('/datahotel/remove',options )
        console.log(JSON.stringify(response))



    }
        function Alterar(){
            if(k==i){
                elemento3.innerHTML = 'ALTERAR'
                j++//controlador do botao
                var pessoas1 = document.querySelector('#pess')
                var quarto1 = document.querySelector('#qua')
                var datas1 = document.querySelector('#date')
                elemento.style.color = 'blue'
                pessoas1.style.borderColor = 'blue'
                quarto1.style.borderColor = 'blue'
                datas1.style.borderColor = 'blue'
                if(j==2){
                    elemento3.innerHTML = 'SELECIONE PARA ALTERAR'
                    elemento.style.color = 'black'
                pessoas1.style.borderColor = 'black'
                quarto1.style.borderColor = 'black'
                datas1.style.borderColor = 'black'
                var pessoas1 = document.querySelector('#pess').value
                var quarto1 = document.querySelector('#qua').value
                var datas1 = document.querySelector('#date').value
        
                elemento.innerHTML = 'Data: '+datas1+' Número de pessoas: '+pessoas1+' Tipo de quarto: '+quarto1
                j=0
            }
            }
        }
    
    

    sendToSever(pessoas, quarto, datas)
}
