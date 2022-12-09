const mesada = document.getElementById('minhamesada');

function comparar(a,b) {
  let resultado = b > a;
  return resultado;
}

mesada.addEventListener('submit',function(evento){
  evento.preventDefault();
  const idade = document.getElementById('suaidade');
  const valor = document.getElementById('seuvalor');
  const validaçao = comparar(idade.valueAsNumber,valor.valueAsNumber);
  const positivo_ou_negativo = document.querySelector('.mensagem');
  if(validaçao) {
    positivo_ou_negativo.innerHTML = 'Tudo certo!';
    positivo_ou_negativo.style.display = 'block';
  }else { 
    positivo_ou_negativo.innerHTML = 'Tem algum valor errado';
    positivo_ou_negativo.style.display = 'block';
  }
})
