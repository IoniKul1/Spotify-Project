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

  // Add a line break between the two lists
  const lineBreak = document.createElement('hr');
  firstChoiceContainer.appendChild(lineBreak);
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

  // Show the corresponding chart based on the values of x and y
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
    document.getElementById('T-P').style.visibility = 'visible';
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
    document.getElementById('R-P').style.visibility = 'visible';
  }

  if ((x == 2 && y == 3) || (x == 3 && y == 2)) {
    document.getElementById('C-L').style.visibility = 'visible';
  }

  if ((x == 2 && y == 4) || (x == 4 && y == 2)) {
    document.getElementById('C-Ro').style.visibility = 'visible';
  }

  if ((x == 2 && y == 5) || (x == 5 && y == 2)) {
    document.getElementById('C-P').style.visibility = 'visible';
  }

  if ((x == 3 && y == 4) || (x == 4 && y == 3)) {
    document.getElementById('L-Ro').style.visibility = 'visible';
  }

  if ((x == 3 && y == 5) || (x == 5 && y == 3)) {
    document.getElementById('L-P').style.visibility = 'visible';
  }

  if ((x == 4 && y == 5) || (x == 5 && y == 4)) {
    document.getElementById('Ro-P').style.visibility = 'visible';
  }
}

function showCardInformation(cardId) {
  const cardInfo = getCardInformation(cardId);
  cardInformation.textContent = cardInfo;
}

function getCardInformation(cardId) {
  switch (cardId) {
    case '0':
      return 'This card represents the Pop genre.';
    case '1':
      return 'This card represents the Rock genre.';
    case '2':
      return 'This card represents the Hip Hop genre.';
    case '3':
      return 'This card represents the Electronic genre.';
    case '4':
      return 'This card represents the Reggae genre.';
    case '5':
      return 'This card represents the Jazz genre.';
    default:
      return '';
  }
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

function hideSongs() {
  const songListContainer = document.getElementById('song-list-container');
  songListContainer.innerHTML = '';
}

function getSongsForCard(cardId) {
  switch (cardId) {
    case '0':
      return ['Song 1', 'Song 2', 'Song 3'];
    case '1':
      return ['Song A', 'Song B', 'Song C'];
    case '2':
      return ['Song X', 'Song Y', 'Song Z'];
    case '3':
      return ['Song P', 'Song Q', 'Song R'];
    case '4':
      return ['Song M', 'Song N', 'Song O'];
    case '5':
      return ['Song J', 'Song K', 'Song L'];
    default:
      return [];
  }
}

function getGenreTitle(cardId) {
  switch (cardId) {
    case '0':
      return 'Pop Songs:';
    case '1':
      return 'Rock Songs:';
    case '2':
      return 'Hip Hop Songs:';
    case '3':
      return 'Electronic Songs:';
    case '4':
      return 'Reggae Songs:';
    case '5':
      return 'Jazz Songs:';
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
