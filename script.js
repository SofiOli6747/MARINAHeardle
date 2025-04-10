function executarComando(params) {
  audio.play();
}

function mudarIcone() {
  // Obtém o elemento de imagem
  const icone = document.getElementById("icone");


  // Altera a imagem dependendo da imagem atual
  if (icone.src.includes("imagens/Captura_de_tela_2025-04-07_223522-removebg-preview.png")) {
      icone.src = "imagens/image-removebg-preview.png"; // Troca para a segunda imagem
  } else {
      icone.src = "imagens/Captura_de_tela_2025-04-07_223522-removebg-preview.png"; // Troca de volta para a primeira imagem
  }
  audio.onended = function() {
    icone.src = "imagens/Captura_de_tela_2025-04-07_223522-removebg-preview.png";
  }
}


document.getElementById("playButton").addEventListener('click', function() {
  let contadorClique = 0;

  contadorClique++;
  executarComando();
  mudarIcone();

  if (contadorClique == 1){
    document.getElementById('skipButton3').disabled = true;
    document.getElementById('skipButton2').disabled = true;
    document.getElementById('skipButton').disabled = false;
    document.getElementById('skipButton3').style.opacity = '40%';
    document.getElementById('skipButton2').style.opacity = '40%';
    document.getElementById('skipButton').style.opacity = '100%';
  }
  if (contadorClique >= 2 || contadorClique === 2 ){
    document.getElementById('skipButton3').disabled = true;
    document.getElementById('skipButton2').disabled = false;
    document.getElementById('skipButton').disabled = true;
    document.getElementById('skipButton').style.opacity = '40%';
    document.getElementById('skipButton2').style.opacity = '100%';
  }


});



const barraProgresso = document.getElementById('barraProgresso');
const audio = document.getElementById('audio');

audio.addEventListener('timeupdate', function() {
  const progresso = (audio.currentTime / audio.duration) * 50;
  barraProgresso.value = progresso;
});

const currentTime = document.querySelector(".currentTime")
const duration = document.querySelector(".duration")

audio.addEventListener('ended', () => {
  barraProgresso.value = 0;
})

audio.ontimeupdate = () => updateTime();

function updateTime() {
  const currentMinutes = Math.floor(audio.currentTime / 60)
  const currentSeconds = Math.floor(audio.currentTime % 60)
  currentTime.textContent = currentMinutes + ':' + formatZero(currentSeconds)

  const durationFormatted = isNaN(audio.duration) ? 0 : audio.duration
  const durationMinutes = Math.floor(durationFormatted / 60)
  const durationSeconds = Math.floor(durationFormatted % 60)
  duration.textContent = durationMinutes + ':' + formatZero(durationSeconds)
}

const formatZero = (n) => (n < 10 ? '0' + n : n)


let contador2 = 0;

skip1 = document.getElementById("skipButton").addEventListener('click', function() {
});


document.getElementById("skipButton").addEventListener('click', function() {
  document.getElementById("playButton").addEventListener('click', function() {
    contadorClique = 2;
    audio2.play();
    document.getElementById('skipButton').style.opacity = '40%';
    document.getElementById('skipButton').disabled = true;
    document.getElementById('skipButton2').disabled = false;
  });
  const audio2 = document.getElementById('audio2');
  audio2.currentTime = 0;
  audio2.play();

  document.getElementById('skipButton2').disabled = false;
  document.getElementById('skipButton').disabled = true;
  document.getElementById('skipButton').style.opacity = '40%';
  document.getElementById('skipButton2').style.opacity = '100%';
  contador++;

  document.getElementById("caixa" + contador).innerHTML += 'Skipped';
  document.getElementById('img' + contador).src = 'imagens/barra.png';

});

const audio2 = document.getElementById('audio2');

audio2.addEventListener('timeupdate', function() {
  const progresso = (audio2.currentTime / audio2.duration) * 50;
  barraProgresso.value = progresso;
});

audio2.addEventListener('ended', () => {
  barraProgresso.value = 0;
})

audio2.ontimeupdate = () => updateTime();

function updateTime() {
  const currentMinutes = Math.floor(audio2.currentTime / 60)
  const currentSeconds = Math.floor(audio2.currentTime % 60)
  currentTime.textContent = currentMinutes + ':' + formatZero(currentSeconds)

  const durationFormatted = isNaN(audio2.duration) ? 0 : audio2.duration
  const durationMinutes = Math.floor(durationFormatted / 60)
  const durationSeconds = Math.floor(durationFormatted % 60)
  duration.textContent = durationMinutes + ':' + formatZero(durationSeconds)
}




document.getElementById("skipButton2").addEventListener('click', function() {
  document.getElementById("playButton").addEventListener('click', function() {
    contadorClique >= 2;
    audio3.play();
    document.getElementById('skipButton').disabled = true;
    document.getElementById('skipButton2').disabled = true;
    document.getElementById('skipButton3').disabled = false;
  });
  const audio3 = document.getElementById('audio3');
  audio3.currentTime = 0;
  audio3.play();
  document.getElementById('skipButton3').disabled = false;
  document.getElementById('skipButton2').disabled = true;
  document.getElementById('skipButton').style.opacity = '40%';
  document.getElementById('skipButton2').style.opacity = '40%';
  document.getElementById('skipButton3').style.opacity = '100%';

  contador++;

  document.getElementById("caixa" + contador).innerHTML += 'Skipped';
  document.getElementById('img' + contador).src = 'imagens/barra.png';


});


const audio3 = document.getElementById('audio3');

audio3.addEventListener('timeupdate', function() {
  const progresso = (audio3.currentTime / audio3.duration) * 50;
  barraProgresso.value = progresso;
});

audio3.addEventListener('ended', () => {
  barraProgresso.value = 0;
})

audio3.ontimeupdate = () => updateTime();

function updateTime() {
  const currentMinutes = Math.floor(audio3.currentTime / 60)
  const currentSeconds = Math.floor(audio3.currentTime % 60)
  currentTime.textContent = currentMinutes + ':' + formatZero(currentSeconds)

  const durationFormatted = isNaN(audio3.duration) ? 0 : audio3.duration
  const durationMinutes = Math.floor(durationFormatted / 60)
  const durationSeconds = Math.floor(durationFormatted % 60)
  duration.textContent = durationMinutes + ':' + formatZero(durationSeconds)
}







document.getElementById("skipButton3").addEventListener('click', function() {
  document.getElementById("playButton").addEventListener('click', function() {
    audio4.play();
    document.getElementById('skipButton3').disabled = true;
  });
  const audio4 = document.getElementById('audio4');
  audio4.currentTime = 0;
  audio4.play();
  document.getElementById('skipButton').disabled = true;
  document.getElementById('skipButton2').disabled = true;
  document.getElementById('skipButton3').disabled = true;
  document.getElementById('skipButton3').style.opacity = '40%';
  
  contador++;

  document.getElementById("caixa" + contador).innerHTML += 'Skipped';
  document.getElementById('img' + contador).src = 'imagens/barra.png';


});


const audio4 = document.getElementById('audio4');

audio4.addEventListener('timeupdate', function() {
  const progresso = (audio4.currentTime / audio4.duration) * 50;
  barraProgresso.value = progresso;
});



audio4.ontimeupdate = () => updateTime();

function updateTime() {
  const currentMinutes = Math.floor(audio4.currentTime / 60)
  const currentSeconds = Math.floor(audio4.currentTime % 60)
  currentTime.textContent = currentMinutes + ':' + formatZero(currentSeconds)

  const durationFormatted = isNaN(audio3.duration) ? 0 : audio3.duration
  const durationMinutes = Math.floor(durationFormatted / 60)
  const durationSeconds = Math.floor(durationFormatted % 60)
  duration.textContent = durationMinutes + ':' + formatZero(durationSeconds)
}






const audio5 = document.getElementById('audio5');

audio5.addEventListener('timeupdate', function() {
  const progresso = (audio5.currentTime / audio5.duration) * 50;
  barraProgresso.value = progresso;
});



audio5.ontimeupdate = () => updateTime();

function updateTime() {
  const currentMinutes = Math.floor(audio5.currentTime / 60)
  const currentSeconds = Math.floor(audio5.currentTime % 60)
  currentTime.textContent = currentMinutes + ':' + formatZero(currentSeconds)

  const durationFormatted = isNaN(audio5.duration) ? 0 : audio5.duration
  const durationMinutes = Math.floor(durationFormatted / 60)
  const durationSeconds = Math.floor(durationFormatted % 60)
  duration.textContent = durationMinutes + ':' + formatZero(durationSeconds)
}

const txt_r1 = document.getElementById('txt-r1');
const txt_r2 = document.getElementById('txt-r2');

const opcaoCorreta = 'Purge the Poison';

let opcaoSelecionada = "";

function mostrarMenu() {


  const opcoes = [
    "Are You Satisfied?",
    "Shampain",   
    "I Am Not a Robot",   
    "Girls",   
    "Mowgli's Road",   
    "Obsessions",   
    "Hollywood",   
    "The Outsider",    
    "Guilty",   
    "Hermit The Frog",   
    "Oh No!", 
    "Seventeen",
    "Numb", 
    "Bubblegum Bitch",
    "Primadonna",
    "Lies",
    "Homewrecker",
    
    "Starring Role",
    
    "The State of Dreaming",
    "Power & Control",
    
    "Living Dead",
    
    "Teen Idle",
    
    "Valley of the Dolls",
    "Hypocrates",
    "Fear and Loathing",
    
    "Radioactive (versão deluxe)",
    
    "Sex Yeah (versão deluxe)",
    
    "Lonely Hearts Club (versão deluxe)",
    
    "Buy the Stars (versão deluxe)",
    
    "How To Be a Heartbreaker (faixa bônus)",
    
    "Radioactive (vídeo bônus)",
    
    "Primadonna (vídeo bônus)", 
    
    "Happy",
    
    "Froot (canção)",
    
    "I'm a Ruin",
    
    'Blue',
    
    'Forget',
    
    'Gold',
    
    "Can't Pin Me Down",
    
    'Weeds',
    
    'Better Than That',
    
    'Solitaire',
    
    'Savages',
    
    'Immortal', 
    
    'Handmade Heaven',
  
    'Superstar',
    
    'Orange Trees',
    
    'Baby',
  
    'Enjoy Your Life',
    
    'True',
    
    'To Be Human',
    
    'End Of The Earth',
    
    'Believe in Love',
    
    'Life Is Strange',
    
    'You',
    
    'Karma',
    
    'Emotional Machine',    
    
    'Too Afraid',
    
    'No More Suckers',
    
    'Soft To Be Strong', 
    
    "Ancient Dreams in a Modern Land",
    "Venus Fly Trap",
    "Man's World",
    "Purge the Poison",
    "Highly Emotional People",
    "New America",
    "Pandora's Box",
    "I Love You But I Love Me More",
    "Flowers",
    "Goodbye"
  ];
  
  const inputTexto = document.getElementById('typebox');
  const menuOpcoes = document.getElementById('menu');
  const letraDigitada = inputTexto.value.toLowerCase();

  // Filtra as opções que começam com a letra digitada
  const opcoesFiltradas = opcoes.filter(opcao => opcao.toLowerCase().startsWith(letraDigitada));

  // Agrupar as opções por inicial
  const grupos = {};

  // Organiza as opções filtradas por inicial
  opcoesFiltradas.forEach(opcao => {
      const inicial = opcao[0].toLowerCase();
      if (!grupos[inicial]) {
          grupos[inicial] = [];
      }
      grupos[inicial].push(opcao);
  });

  // Se houver opções filtradas, exibe o menu, caso contrário, esconde
  if (letraDigitada.length > 0 && opcoesFiltradas.length > 0) {
      menuOpcoes.innerHTML = ''; // Limpa o menu antes de adicionar as novas opções
      

      // Cria grupos de opções com base na inicial
      Object.keys(grupos).forEach(inicial => {
          const grupoDiv = document.createElement('div');
          grupoDiv.classList.add('grupoOpcao');

          // Adiciona as opções do grupo
          grupos[inicial].forEach(opcao => {
              const opcaoDiv = document.createElement('div');
              opcaoDiv.textContent = opcao;

              // Adiciona evento de clique na opção para fechar o menu
              opcaoDiv.onclick = () => {
                opcaoSelecionada = opcao;
                inputTexto.value = opcao; // Preenche o input com a opção selecionada
                menuOpcoes.style.display = 'none'; // Fecha o menu
            };

            grupoDiv.appendChild(opcaoDiv);
          });

          // Adiciona o grupo de opções ao menu
          menuOpcoes.appendChild(grupoDiv);
      });

      menuOpcoes.style.display = 'block';  // Mostra o menu
  } else {
      menuOpcoes.style.display = 'none';  // Esconde o menu
  }
}

const A = document.getElementById("enter").addEventListener('click', function() { });
const B = document.getElementById("skipButton").addEventListener('click', function() {});

let contador = 0;
let seleção = 0;

function exibirTelaDeSucesso(params) {
  const telaSucesso = document.getElementById('a');
  telaSucesso.style.display = 'block';  // Exibe a tela de sucesso
}

function mostrarOpcao(tipoBotao) {
  contador++;

  const select = opcaoSelecionada;
  const valorSelecionado = select;

  if (tipoBotao === A){
    document.getElementById("caixa" + contador).innerHTML += valorSelecionado;
  } 

  if (contador >= 4 && (document.getElementById("caixa4").innerHTML != valorSelecionado)) {
    const telaFracasso = document.getElementById('aa');
    telaFracasso.style.display = 'block';
}

}


function enviarOpcao(params) {
  mostrarOpcao();
  var imagem = document.getElementById('img1')

  if (opcaoSelecionada === opcaoCorreta){
    const telaFracasso = document.getElementById('aa');
    telaFracasso.style.display = 'none';
    exibirTelaDeSucesso();
  } else {
    document.getElementById('img' + contador).src = 'imagens/x.png';
  }

}

