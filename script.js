fetch(`https://economia.awesomeapi.com.br/last/USD-BRL`).then(resposta => {
    return resposta.json()
}).then(economia => {
    console.log(economia)
    document.getElementById('valorDolar').innerHTML = 'R$' +  parseFloat(economia.USDBRL.bid).toFixed(2);
    document.getElementById('maiorDolar').innerHTML = 'R$' +  parseFloat(economia.USDBRL.high).toFixed(2);
    document.getElementById('menorDolar').innerHTML = 'R$' +  parseFloat(economia.USDBRL.low).toFixed(2);
})

setInterval(function() {
    console.log("Atualizando informações");
    
    fetch(`https://economia.awesomeapi.com.br/last/USD-BRL`).then(resposta => {
        return resposta.json()
    }).then(economia => {
        console.log(economia)
        document.getElementById('valorDolar').innerHTML = 'R$' + parseFloat(economia.USDBRL.bid).toFixed(2);
        document.getElementById('maiorDolar').innerHTML = 'R$' +  parseFloat(economia.USDBRL.high).toFixed(2);
        document.getElementById('menorDolar').innerHTML = 'R$' +  parseFloat(economia.USDBRL.low).toFixed(2);
    })

}, 10000);