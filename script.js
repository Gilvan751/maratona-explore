const elementoResposta = document.querySelector('#resposta');
const inputPergunta = document.querySelector('#inputPergunta');

const respostas = [ 'Certeza!',
                    'Não tenho tanta certeza.',
                    'É decididamente assim.',
                    'Não conte com isso.',
                    'Sem dúvidas!',
                    'Pergunte novamente mais tarde.',
                    'Sim, definitivamente!',
                    'Minha resposta é não.',
                    'Você pode contar com isso.',
                    'Melhor não te dizer agora.',
                    'A meu ver sim.',
                    'Minhas fontes dizem não.',
                    'Provavelmente',
                    'Não é possivel prever agora.',
                    'Perspectiva boa.',
                    'As perspectivas não são tão boas.',
                    'Sim',
                    'Concentre-se e pergunte novamente.',
                    'Sinais apontam que sim.',]

function fazerPergunta() {
  if(inputPergunta.value == '') {
    alert('Digite uma pergunta? ')
    return
  }
  const pergunta = '<div>' + inputPergunta.value + '</div>'
  const totalResposta = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalResposta)
  console.log(respostas[numeroAleatorio])
  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]
  setTimeout(function (){
    elementoResposta.style.opacity = 0;
  },3000 )

}