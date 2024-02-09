var currentPage = 0;
var pages = ['capa', 'pg1', 'pg2', 'pg3', 'pg4', 'pg5', 'fim'].map(id => document.getElementById(id));
var startX = 0;
var startTime = 0;

function navigateTo(direction) {
    pages[currentPage].classList.remove('active');
    pages[currentPage].classList.add('inactive');
    if (direction === 'next') {
        currentPage = (currentPage + 1) % pages.length;
    } else if (direction === 'prev') {
        currentPage = (currentPage - 1 + pages.length) % pages.length;
    }
    pages[currentPage].classList.remove('inactive');
    pages[currentPage].classList.add('active');
}

document.getElementById('Portfolio').addEventListener('mousedown', function(e) {
    startX = e.clientX;
    startTime = new Date().getTime();
});

document.getElementById('Portfolio').addEventListener('mouseup', function(e) {
    var endX = e.clientX;
    var endTime = new Date().getTime();
    var distance = Math.abs(endX - startX);
    var time = endTime - startTime;
    var speed = distance / time;
    if (distance > 50 && speed > 0.5) {
        if (startX > endX) {
            navigateTo('next'); 
        } else {
            navigateTo('prev'); 
        }
    }
});




var imagens = [
'midia/pg3/certificados_Naza_Cunha/img-certificados-1.jpg',
'midia/pg3/certificados_Naza_Cunha/img-certificados-2.jpg',
'midia/pg3/certificados_Naza_Cunha/img-certificados-3.jpg'
];
var indiceAtual = 0;

function transicaoImagem(direcao) {
    var imagem = document.getElementById('imagem');
    imagem.classList.add('hidden');

    setTimeout(function() {
        if (direcao === 'proxima') {
            indiceAtual = (indiceAtual + 1) % imagens.length;
        } else if (direcao === 'anterior') {
            indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
        }

        imagem.style.backgroundImage = "url('" + imagens[indiceAtual] + "')";
        imagem.classList.remove('hidden');
    }, 1000);
}



var imagens = [
    'midia/pg5/img-produto1.jpeg',
    'midia/pg5/img-produto2.jpeg',
    'midia/pg5/img-produto3.jpeg',
    'midia/pg5/img-produto4.jpeg',
    'midia/pg5/img-produto5.jpeg',
    'midia/pg5/img-produto6.jpeg',
    

    ];
    var indiceAtual = 0;
    
    function transicaoImagem(direcao) {
        var imagem = document.getElementById('imagem-pg5');
        imagem.classList.add('hidden');
    
        setTimeout(function() {
            if (direcao === 'proxima') {
                indiceAtual = (indiceAtual + 1) % imagens.length;
            } else if (direcao === 'anterior') {
                indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
            }
    
            imagem.style.backgroundImage = "url('" + imagens[indiceAtual] + "')";
            imagem.classList.remove('hidden');
        }, 1000);
    }