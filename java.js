document.getElementById("buy").onclick = function(){
    document.getElementById("confirm").innerHTML = "Order placed, now you can suck my dick. Check your email";
    document.getElementById("buy").style.display = "none";
}


//ENQUANTO O ADD EVENT LISTERNET EMPILHA OS OS EVENTOS, SEM DESCONSIDERAR O EVENTO ANTERIOR, EX:



const buy = document.getElementById('buy');



buy.addEventListener('click', print)

function print(){
    console.log('vc gama, vc gama')
}

buy.addEventListener('click', function mama(){
    console.log('e fica correndo atrás')
})

const h1 = document.querySelector('h1')

h1.addEventListener('click', print)

function print(){
    console.log('essa mina é um abusuuuuu')
}

h1.addEventListener('click', function chupanu(){
    console.log('ta chupanuu tuduuu')
})