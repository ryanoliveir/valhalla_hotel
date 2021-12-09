const bot = document.querySelector('#sair')

bot.addEventListener('click', () => {
    fetch('/auth/logout').then(response => {
        if(response.redirected == true){
            location.href = response.url
        }
    })
})