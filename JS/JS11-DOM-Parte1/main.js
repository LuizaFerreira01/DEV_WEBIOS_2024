// window.alert("Bem vindo ao caos")

var time = prompt("Qual é o nome do time?");

if (time == "Sao Paulo"){
    alert("O time é Sao Paulo")
    document.body.style.backgroundColor = "red"

    let nomeTime = document.createElement('h1')
    nomeTime.innerHTML = "Sao Paulo - Rogério Ceni"
    document.body.appendChild (nomeTime)

}else if (time == "Corinthians"){
    alert("O time é Corinthians")
        document.body.style.backgroundColor = "black"
        let nomeTime = document.createElement('h2')
        nomeTime.innerHTML = "Corinthians - Cássio"
        document.body.appendChild(nomeTime)
        nomeTime.style.color = "White"
   
    }else if (time == "Palmeiras"){
       
        alert("O time é Palmeiras")
        document.body.style.backgroundColor = "green"
    
    }else{
        alert("Não sei qual é esse time")
    }
