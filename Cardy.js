const cards = document.querySelectorAll('.card');
let selectedCards = [];
const firstChoiceContainer = document.querySelector('.first-choice-container');
const secondChoiceContainer = document.querySelector('.second-choice-container');
const graphElements = document.querySelectorAll('#graph canvas');
const cardInformation = document.getElementById('card-information');
const yTracker = document.getElementById('yTracker');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    const cardId = card.getAttribute('data-card-id');
    showSongs(cardId);
  });

  card.addEventListener('mouseleave', () => {
    hideSongs();
  });

  card.addEventListener('click', () => {
    if (selectedCards.length < 2 || card.classList.contains('selected')) {
      card.classList.toggle('selected');
      if (card.classList.contains('selected')) {
        selectedCards.push(card);
      } else {
        selectedCards = selectedCards.filter(selectedCard => selectedCard !== card);
      }
      updateChoices();
      updateYTracker(selectedCards);
    }
    toggleGraph();
    showCardInformation(card.getAttribute('data-card-id'));
    showCardImage(card.getAttribute('data-card-id'));
  });
});

const cardContainer = document.querySelector('.card-container');
cardContainer.addEventListener('click', () => {
  if (selectedCards.length === 2) {
    const x = selectedCards[0].getAttribute('data-card-id');
    const y = selectedCards[1].getAttribute('data-card-id');
    barcharts(x, y);
  } else {
    toggleGraph();
  }
});

function updateChoices() {
  firstChoiceContainer.innerHTML = '';
  secondChoiceContainer.innerHTML = '';

  selectedCards.forEach((card, index) => {
    const clone = card.cloneNode(true);
    clone.classList.remove('selected');

    if (index === 0) {
      firstChoiceContainer.appendChild(clone);
    } else if (index === 1) {
      secondChoiceContainer.appendChild(clone);
    }
  });

  // Add a line break between the two li
}

function toggleGraph() {
  if (selectedCards.length === 0 || (selectedCards.length === 1 && selectedCards[0].getAttribute('data-card-id') === '0')) {
    graphElements.forEach(element => {
      if (element.id === 'n') {
        element.style.visibility = 'visible';
      } else {
        element.style.visibility = 'hidden';
      }
    });
  } else {
    graphElements.forEach(element => {
      element.style.visibility = 'hidden';
    });
  }
}

function barcharts(x, y) {
  graphElements.forEach(element => {
    element.style.visibility = 'hidden';
  });

  if ((x == 0 && y == 1) || (x == 1 && y == 0)) {
    document.getElementById('T-R').style.visibility = 'visible';
  }

  if ((x == 0 && y == 2) || (x == 2 && y == 0)) {
    document.getElementById('T-C').style.visibility = 'visible';
  }

  if ((x == 0 && y == 3) || (x == 3 && y == 0)) {
    document.getElementById('T-L').style.visibility = 'visible';
  }

  if ((x == 0 && y == 4) || (x == 4 && y == 0)) {
    document.getElementById('T-Ro').style.visibility = 'visible';
  }

  if ((x == 0 && y == 5) || (x == 5 && y == 0)) {
    document.getElementById('T-A').style.visibility = 'visible';
  }

  if ((x == 1 && y == 2) || (x == 2 && y == 1)) {
    document.getElementById('R-C').style.visibility = 'visible';
  }

  if ((x == 1 && y == 3) || (x == 3 && y == 1)) {
    document.getElementById('R-L').style.visibility = 'visible';
  }

  if ((x == 1 && y == 4) || (x == 4 && y == 1)) {
    document.getElementById('R-Ro').style.visibility = 'visible';
  }

  if ((x == 1 && y == 5) || (x == 5 && y == 1)) {
    document.getElementById('R-A').style.visibility = 'visible';
  }

  if ((x == 2 && y == 3) || (x == 3 && y == 2)) {
    document.getElementById('C-L').style.visibility = 'visible';
  }

  if ((x == 2 && y == 4) || (x == 4 && y == 2)) {
    document.getElementById('C-Ro').style.visibility = 'visible';
  }

  if ((x == 2 && y == 5) || (x == 5 && y == 2)) {
    document.getElementById('C-A').style.visibility = 'visible';
  }

  if ((x == 3 && y == 4) || (x == 4 && y == 3)) {
    document.getElementById('L-Ro').style.visibility = 'visible';
  }

  if ((x == 3 && y == 5) || (x == 5 && y == 3)) {
    document.getElementById('L-A').style.visibility = 'visible';
  }

  if ((x == 4 && y == 5) || (x == 5 && y == 4)) {
    document.getElementById('Ro-A').style.visibility = 'visible';
  }
}

function showCardInformation(cardId) {
  const cardInfo = getCardInformation(cardId);
  cardInformation.textContent = cardInfo;
}

function showSongs(cardId) {
  const songs = getSongsForCard(cardId);

  const songListContainer = document.getElementById('song-list-container');
  songListContainer.innerHTML = '';

  const songList = document.createElement('ul');
  songs.forEach((song, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = song;
    songList.appendChild(listItem);

    // Add a horizontal line between each song except for the last one
    if (index < songs.length - 1) {
      const horizontalLine = document.createElement('hr');
      songList.appendChild(horizontalLine);
    }
  });

  const genreTitle = document.createElement('h2');
  genreTitle.textContent = getGenreTitle(cardId);
  songListContainer.appendChild(genreTitle);
  songListContainer.appendChild(songList);
}


function getSongsForCard(cardId) {
  switch (cardId) {
    case '0':
      return {
        'Secrets - Hux & Thin, Galo Azin': 'link1.mp3',
        'Lemonade - Niko The Kid': 'link2.mp3',
        'Organ Belta - Jamie Roy': 'link3.mp3',
        'Singularity - WLAD Remix - Sidney Charles': 'link4.mp3',
        'Spanish Mode - Paskman': 'link5.mp3',
        'Chit Chat - Milion (NL)': 'link6.mp3',
        'Bring A Friend - Hood Rich': 'link7.mp3',
        'What Is This - James Dexter': 'link8.mp3',
        'Instate - Original Mix - Rich NxT': 'link9.mp3',
        'Rotate - Benjermain': 'link10.mp3'
      };
    case '1':
      return {
        'RNP - Cordae, Anderson .Paak': 'link11.mp3',
        'Rain Man - Eminem': 'link12.mp3',
        'Congratulations (feat. Bilal) - Mac Miller, Bilal': 'link13.mp3',
        'Mr. Rager - Kid Cudi': 'link14.mp3',
        'No Role Modelz - J. Cole': 'link15.mp3',
        'The Real Slim Shady - Eminem': 'link16.mp3',
        'Without Me - Eminem': 'link17.mp3',
        'Mockingbird - Eminem': 'link18.mp3',
        'Superman - Eminem, Dina Rae': 'link19.mp3',
        'Maytag (Tax Free) - Ben Reilly': 'link20.mp3'
      };
    case '2':
      return {
        'M.A - Remix - BM, Callejero Fino, La Joaqui': 'link21.mp3',
        'Un Finde - Remix - Maty Deejay, DJ Roma': 'link22.mp3',
        'DISCOTEKA - The La Planta, BM, Alejo Isakk': 'link23.mp3',
        'Un X100To - Remix - Emmi Dj': 'link24.mp3',
        'Pobre Corazón - Ke Personajes, Onda Sabanera': 'link25.mp3',
        'En La Intimidad - Remix - Tomy DJ, El Kaio': 'link26.mp3',
        'Jagger.mp3 - Remix - Tomy DJ': 'link27.mp3',
        'Los del Espacio - Tiago PZK, Duki, Emilia, (...)': 'link28.mp3',
        'Disfruto - Ke Personajes': 'link29.mp3',
        'Vida Gangster - Remix - Tomy DJ': 'link30.mp3'
      };
    case '3':
      return {
        'Glowing Lights - No Spirit': 'link31.mp3',
        'Fireflies - Kanisan, frad': 'link32.mp3',
        'Recharge - Yasumu': 'link33.mp3',
        'Floating Island - Dimension 32': 'link34.mp3',
        'Plume - Dimension 32, Hevi': 'link35.mp3',
        'Epilogue - mell-ø, Ambulo': 'link36.mp3',
        'A Wave In The Ocean - Laffey': 'link37.mp3',
        'Skipping Rocks - Laffey': 'link38.mp3',
        'C U in Class! - Flovry, tender spring': 'link39.mp3',
        'Lilac - Kainbeats': 'link40.mp3'
      };
    case '4':
      return {
        'You Shook Me All Night Long - AC/DC': 'link41.mp3',
        "Welcome To The Jungle - Guns N' Roses": 'link42.mp3',
        'Pour Some Sugar On Me - Def Leppard': 'link43.mp3',
        'Jump - 2015 Remaster - Van Halen': 'link44.mp3',
        'Another One Bites The Dust - Queen': 'link45.mp3',
        'Every Breath You Take - The Police': 'link46.mp3',
        'Should I Stay or Should I Go - The Clash': 'link47.mp3',
        "Livin' On A Prayer - Bon Jovi": 'link48.mp3',
        "I Was Made For Lovin' You - KISS": 'link49.mp3',
        'Rock You Like A Hurricane - Scorpions': 'link50.mp3'
      };
    case '5':
      return {
        'Heartless - 1800 Moe, James Perry': 'link51.mp3',
        'Remedy - Ret': 'link52.mp3',
        'Gentle Rainfall - Weston Brown': 'link53.mp3',
        'Fly - Paradise Circus': 'link54.mp3',
        'By The Beach - Calm Waves': 'link55.mp3',
        'Birth Of A New Era - PsychCloned': 'link56.mp3',
        'Timeless Lament - The Restful Moment': 'link57.mp3',
        'Safety - N.E. Thing': 'link58.mp3',
        'Sentient - Gruber': 'link59.mp3',
        'You Better Run! (Villains Theme) - Dirty Mitts': 'link60.mp3'
      };
    default:
      return {
        'Secrets - Hux & Thin, Galo Azin': 'link1.mp3',
        'Lemonade - Niko The Kid': 'link2.mp3',
        'Organ Belta - Jamie Roy': 'link3.mp3',
        'Singularity - WLAD Remix - Sidney Charles': 'link4.mp3',
        'Spanish Mode - Paskman': 'link5.mp3',
        'Chit Chat - Milion (NL)': 'link6.mp3',
        'Bring A Friend - Hood Rich': 'link7.mp3',
        'What Is This - James Dexter': 'link8.mp3',
        'Instate - Original Mix - Rich NxT': 'link9.mp3',
        'Rotate - Benjermain': 'link10.mp3'
      };
  }
}


function getGenreTitle(cardId) {
  switch (cardId) {
    case '0':
      return 'Techno:';
    case '1':
      return 'Rap:';
    case '2':
      return 'Cachengue:';
    case '3':
      return 'Lo-Fi:';
    case '4':
      return 'Rock:';
    case '5':
      return 'Alternative:';
    default:
      return '';
  }
}

function updateYTracker(selectedCards) {
  if (selectedCards.length === 1) {
    yTracker.textContent = 'Please select a second card.';
  } else if (selectedCards.length === 2) {
    yTracker.textContent = 'Click on the chart to view the corresponding barchart.';
  } else {
    yTracker.textContent = '';
  }
}

function addModToCard(cardId, mod) {
  const card = document.querySelector(`[data-card-id="${cardId}"]`);
  if (card) {
    card.classList.add(mod);
  }
}

function removeModFromCard(cardId, mod) {
  const card = document.querySelector(`[data-card-id="${cardId}"]`);
  if (card) {
    card.classList.remove(mod);
  }
}

function toggleModOnCard(cardId, mod) {
  const card = document.querySelector(`[data-card-id="${cardId}"]`);
  if (card) {
    card.classList.toggle(mod);
  }
}

function addModToCards(mod) {
  cards.forEach(card => {
    card.classList.add(mod);
  });
}

function removeModFromCards(mod) {
  cards.forEach(card => {
    card.classList.remove(mod);
  });
}

function toggleModOnCards(mod) {
  cards.forEach(card => {
    card.classList.toggle(mod);
  });
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

$('.txt').html(function(i, html) {
  var chars = $.trim(html).split("");

  return '<span>' + chars.join('</span><span>') + '</span>';
});

<<<<<<< Updated upstream
// Añade esta función al código existente
function playSong(songUrl) {
  // Aquí puedes implementar la lógica para reproducir la canción utilizando la URL proporcionada
  // Por ejemplo, podrías crear un elemento de audio y establecer la URL como fuente
  const audioElement = document.createElement('audio');
  audioElement.src = songUrl;
  audioElement.play();
}

// Añade este evento al código existente para controlar el clic en cada canción
songList.addEventListener('click', event => {
  if (event.target.nodeName === 'LI') {
    const songUrl = event.target.dataset.songUrl;
    playSong(songUrl);
  }
});

// Modifica la función showSongs para incluir la URL de cada canción en el elemento de lista correspondiente
function showSongs(cardId) {
  const songs = getSongsForCard(cardId);

  const songListContainer = document.getElementById('song-list-container');
  songListContainer.innerHTML = '';

  const songList = document.createElement('ul');
  songs.forEach((song, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = song;
    listItem.dataset.songUrl = songs[song]; // Asigna la URL de la canción al atributo de datos "songUrl"
    songList.appendChild(listItem);

    // Añade una línea horizontal entre cada canción excepto la última
    if (index < songs.length - 1) {
      const horizontalLine = document.createElement('hr');
      songList.appendChild(horizontalLine);
    }
  });

  const genreTitle = document.createElement('h2');
  genreTitle.textContent = getGenreTitle(cardId);
  songListContainer.appendChild(genreTitle);
  songListContainer.appendChild(songList);
}
=======

var welcomeDiv = document.getElementById("welcome");
    var questionDiv = document.getElementById("question");
    var resultText = document.getElementById("resultText");
    var resultDiv = document.getElementById("result");
    var currentQuestion = 1;
    var totalQuestions = 5; // Número total de preguntas
    var answers = [];

    function startExperiment() {
      welcomeDiv.style.opacity = 0;
      welcomeDiv.style.transform = "translateY(-20px)";

      setTimeout(function() {
        welcomeDiv.style.display = "none";
        showQuestion(currentQuestion);
      }, 500); // Espera 500ms antes de mostrar la primera pregunta
    }

    var questions = [
  {
    question: "How often do you skip songs?",
    options: ["Rarely", "Sometimes", "Frequently"]
  },
  {
    question: "Question 2: Another question",
    options: ["Option 1", "Option 2", "Option 3"]
  },
  {
    question: "Question 2: Another question",
    options: ["Option 1", "Option 2", "Option 3"]
  },
  {
    question: "Question 2: Another question",
    options: ["Option 1", "Option 2", "Option 3"]
  },
  {
    question: "Question 2: Another question",
    options: ["Option 1", "Option 2", "Option 3"]
  }
];

    function saveAnswer(answer) {
      questionDiv.style.opacity = 0;
      questionDiv.style.transform = "translateY(20px)";

      setTimeout(function() {
        answers.push(answer);

        if (currentQuestion < totalQuestions) {
          currentQuestion++;
          showQuestion(currentQuestion);
        } else {
          showResult();
        }
      }, 500); // Espera 500ms antes de continuar con la siguiente pregunta
    }

    function showQuestion(questionNumber) {
  var currentQuestionObj = questions[questionNumber - 1]; // Restamos 1 porque los índices del array comienzan en 0
  questionDiv.innerHTML = "Question " + questionNumber + ": " + currentQuestionObj.question;
  questionDiv.style.opacity = 1;
  questionDiv.style.transform = "translateY(0)";

  var options = `
    <div class="options-container">
  `;

  for (var i = 0; i < currentQuestionObj.options.length; i++) {
    options += `<button class="option" onclick="saveAnswer(${i + 1})">${currentQuestionObj.options[i]}</button>`;
  }

  options += `</div>`;

  setTimeout(function() {
    questionDiv.innerHTML += options;

    var optionsContainer = document.getElementsByClassName("options-container")[0];
    optionsContainer.style.opacity = 1;
    optionsContainer.style.transform = "translateY(0)";
  }, 500); // Espera 500ms antes de mostrar las opciones
}


    function showResult() {
      var score = calculateScore();
      resultText.innerHTML = "Your Spotify is " + score + "!";
      questionDiv.style.opacity = 0;
      questionDiv.style.transform = "translateY(20px)";

      setTimeout(function() {
        questionDiv.style.display = "none";
        resultDiv.style.opacity = 1;
        resultDiv.style.transform = "translateY(0)";
      }, 500); // Espera 500ms antes de mostrar el resultado
    }

    function calculateScore() {
      // Calcula el puntaje total según las respuestas
      var total = answers.reduce(function(sum, answer) {
        return sum + answer;
      }, 0);

      var average = total / totalQuestions;

      if (average <= 1) {
        return "Amazing";
      } else if (average <= 2) {
        return "Good";
      } else if (average <= 3) {
        return "Average";
      } else {
        return "Bad";
      }
    }
>>>>>>> Stashed changes
