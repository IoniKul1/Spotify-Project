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
      return ['Secrets - Hux & Thin, Galo Azin', 'Lemonade - Niko The Kid', 'Organ Belta - Jamie Roy', 'Singularity - WLAD Remix - Sidney Charles', 'Spanish Mode - Paskman', 'Chit Chat - Milion (NL)', 'Bring A Friend - Hood Rich', 'What Is This - James Dexter', 'Instate - Original Mix - Rich NxT', 'Rotate - Benjermain'];
    case '1':
      return ['RNP - Cordae, Anderson .Paak', 'Rain Man - Eminem', 'Congratulations (feat. Bilal) - Mac Miller, Bilal', 'Mr. Rager - Kid Cudi', 'No Role Modelz - J. Cole', 'The Real Slim Shady - Eminem', 'Without Me - Eminem', 'Mockingbird - Eminem', 'Superman - Eminem, Dina Rae', 'Maytag (Tax Free) - Ben Reilly'];
    case '2':
      return ['M.A - Remix - BM, Callejero Fino, La Joaqui', 'Un Finde - Remix - Maty Deejay, DJ Roma', 'DISCOTEKA - The La Planta, BM, Alejo Isakk', 'Un X100To - Remix - Emmi Dj', 'Pobre Corazón - Ke Personajes, Onda Sabanera', 'En La Intimidad - Remix - Tomy DJ, El Kaio', 'Jagger.mp3 - Remix - Tomy DJ', 'Los del Espacio - Tiago PZK, Duki, Emilia, (...)', 'Disfruto - Ke Personajes', 'Vida Gangster - Remix - Tomy DJ'];
    case '3':
      return ['Glowing Lights - No Spirit', 'Fireflies - Kanisan, frad', 'Recharge - Yasumu', 'Floating Island - Dimension 32', 'Plume - Dimension 32, Hevi', 'Epilogue - mell-ø, Ambulo', 'A Wave In The Ocean - Laffey', 'Skipping Rocks - Laffey', 'C U in Class! - Flovry, tender spring', 'Lilac - Kainbeats'];
    case '4':
      return ['You Shook Me All Night Long - AC/DC', "Welcome To The Jungle - Guns N' Roses", 'Pour Some Sugar On Me - Def Leppard', 'Jump - 2015 Remaster - Van Halen', 'Another One Bites The Dust - Queen', 'Every Breath You Take - The Police', 'Should I Stay or Should I Go - The Clash', "Livin' On A Prayer - Bon Jovi", "I Was Made For Lovin' You - KISS", 'Rock You Like A Hurricane - Scorpions'];
    case '5':
      return ['Heartless - 1800 Moe, James Perry', 'Remedy - Ret', 'Gentle Rainfall - Weston Brown', 'Fly - Paradise Circus', 'By The Beach - Calm Waves', 'Birth Of A New Era - PsychCloned', 'Timeless Lament - The Restful Moment', 'Safety - N.E. Thing', 'Sentient - Gruber', 'You Better Run! (Villains Theme) - Dirty Mitts'];
    default:
      return ['Secrets - Hux & Thin, Galo Azin', 'Lemonade - Niko The Kid', 'Organ Belta - Jamie Roy', 'Singularity - WLAD Remix - Sidney Charles', 'Spanish Mode - Paskman', 'Chit Chat - Milion (NL)', 'Bring A Friend - Hood Rich', 'What Is This - James Dexter', 'Instate - Original Mix - Rich NxT', 'Rotate - Benjermain'];
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

$('.txt').html(function(i, html) {
  var chars = $.trim(html).split("");

  return '<span>' + chars.join('</span><span>') + '</span>';
});

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
