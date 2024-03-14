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
  'midia/pg5/img-produto-cuias.jpg',
  'midia/pg5/img-produto-cuias1.jpg',
  'midia/pg5/img-produto-cuias2.jpg',
  'midia/pg5/img-produto-agenda.jpg',
  'midia/pg5/img-produto-agenda1.jpg',
  'midia/pg5/img-produto-agenda2.jpg',
  'midia/pg5/img-produto-biojoias.jpg',
  'midia/pg5/img-produto-biojoias1.jpg',
  'midia/pg5/img-produto-biojoias2.jpg',


];
var indiceAtual = 0;

function transicaoImagem(direcao) {
  var imagem = document.getElementById('imagemProduto');
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



var imagenscertificado = [
  'midia/pg3/certificados_Naza_Cunha/img-certificados-1.jpg',
  'midia/pg3/certificados_Naza_Cunha/img-certificados-2.jpg',
  'midia/pg3/certificados_Naza_Cunha/img-certificados-3.jpg',
  'midia/pg3/certificados_Naza_Cunha/img-certificados-4.jpg',
  'midia/pg3/certificados_Naza_Cunha/img-certificados-5.jpg',
  'midia/pg3/certificados_Naza_Cunha/img-certificados-6.jpg',
  'midia/pg3/certificados_Naza_Cunha/img-certificados-7.jpg',
  'midia/pg3/certificados_Naza_Cunha/img-certificados-8.jpg',
  'midia/pg3/certificados_Naza_Cunha/img-certificados-9.jpg',
  'midia/pg3/certificados_Naza_Cunha/img-certificados-10.jpg',
  'midia/pg3/certificados_Naza_Cunha/img-certificados-11.jpg',
  'midia/pg3/certificados_Naza_Cunha/img-certificados-12.jpg',
  'midia/pg3/certificados_Naza_Cunha/img-certificados-13.jpg',
  'midia/pg3/certificados_Naza_Cunha/img-certificados-14.jpg',
  'midia/pg3/certificados_Naza_Cunha/img-certificados-15.jpg',
  'midia/pg3/certificados_Naza_Cunha/img-certificados-16.jpg',
  'midia/pg3/certificados_Naza_Cunha/img-certificados-17.jpg',
  'midia/pg3/certificados_Naza_Cunha/img-certificados-18.jpg',
  'midia/pg3/certificados_Naza_Cunha/img-certificados-19.jpg',
];
var indiceAtualcertificado = 0;

function transicaoImagemCertificados(direcao) {
  var imagem = document.getElementById('imagem-certificados');
  imagem.classList.add('hidden');

  setTimeout(function() {
    if (direcao === 'proxima') {
      indiceAtualcertificado = (indiceAtualcertificado + 1) % imagenscertificado.length;
    } else if (direcao === 'anterior') {
      indiceAtualcertificado = (indiceAtualcertificado - 1 + imagenscertificado.length) % imagenscertificado.length;
    }

    imagem.style.backgroundImage = "url('" + imagenscertificado[indiceAtualcertificado] + "')";
    imagem.classList.remove('hidden');
  }, 1000);
}

