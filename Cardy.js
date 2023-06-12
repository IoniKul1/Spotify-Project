const cards = document.querySelectorAll('.card');
let selectedCards = [];
const firstChoiceContainer = document.querySelector('.first-choice-container');
const secondChoiceContainer = document.querySelector('.second-choice-container');
const graphElements = document.querySelectorAll('#graph canvas');

cards.forEach(card => {
  card.addEventListener('click', () => {
    if (selectedCards.length < 2 || card.classList.contains('selected')) {
      card.classList.toggle('selected');
      if (card.classList.contains('selected')) {
        selectedCards.push(card);
      } else {
        selectedCards = selectedCards.filter(selectedCard => selectedCard !== card);
      }
      updateChoices();
    }
    toggleGraph();
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
}

function toggleGraph() {
  if (selectedCards.length === 2) {
    graphElements.forEach(element => {
      element.style.visibility = 'visible';
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
  

  // Muestra el gráfico correspondiente según los valores de x e y
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