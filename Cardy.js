const cards = document.querySelectorAll('.card');
let selectedCards = [];
const firstChoiceContainer = document.querySelector('.first-choice-container');
const secondChoiceContainer = document.querySelector('.second-choice-container');

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
  });
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

cards.forEach(card => {
  card.addEventListener('click', () => {
    const cardId = card.getAttribute('id');
    selectedCards.push(cardId);

    // Verificar si se han seleccionado dos cartas
    if (selectedCards.length === 2) {
      const firstCardId = selectedCards[0];
      const secondCardId = selectedCards[1];

      // Obtener el gráfico correspondiente según las cartas seleccionadas
      let graphId;
      if (
        (firstCardId === '1' && secondCardId === '2') ||
        (firstCardId === '2' && secondCardId === '1')
      ) {
        graphId = 'T-R';
      } else if (
        (firstCardId === '1' && secondCardId === '3') ||
        (firstCardId === '3' && secondCardId === '1')
      ) {
        graphId = 'T-C';
      } else if (
        (firstCardId === '1' && secondCardId === '4') ||
        (firstCardId === '4' && secondCardId === '1')
      ) {
        graphId = 'T-L';
      } else if (
        (firstCardId === '1' && secondCardId === '5') ||
        (firstCardId === '5' && secondCardId === '1')
      ) {
        graphId = 'T-Ro';
      } else if (
        (firstCardId === '1' && secondCardId === '6') ||
        (firstCardId === '6' && secondCardId === '1')
      ) {
        graphId = 'T-A';
      } else if (
        (firstCardId === '2' && secondCardId === '3') ||
        (firstCardId === '3' && secondCardId === '2')
      ) {
        graphId = 'R-C';
      } else if (
        (firstCardId === '2' && secondCardId === '4') ||
        (firstCardId === '4' && secondCardId === '2')
      ) {
        graphId = 'R-L';
      } else if (
        (firstCardId === '2' && secondCardId === '5') ||
        (firstCardId === '5' && secondCardId === '2')
      ) {
        graphId = 'R-Ro';
      } else if (
        (firstCardId === '2' && secondCardId === '6') ||
        (firstCardId === '6' && secondCardId === '2')
      ) {
        graphId = 'R-A';
      } else if (
        (firstCardId === '3' && secondCardId === '4') ||
        (firstCardId === '4' && secondCardId === '3')
      ) {
        graphId = 'C-L';
      } else if (
        (firstCardId === '3' && secondCardId === '5') ||
        (firstCardId === '5' && secondCardId === '3')
      ) {
        graphId = 'C-Ro';
      } else if (
        (firstCardId === '3' && secondCardId === '6') ||
        (firstCardId === '6' && secondCardId === '3')
      ) {
        graphId = 'C-A';
      } else if (
        (firstCardId === '4' && secondCardId === '5') ||
        (firstCardId === '5' && secondCardId === '4')
      ) {
        graphId = 'L-Ro';
      } else if (
        (firstCardId === '4' && secondCardId === '6') ||
        (firstCardId === '6' && secondCardId === '4')
      ) {
        graphId = 'L-A';
      } else if (
        (firstCardId === '5' && secondCardId === '6') ||
        (firstCardId === '6' && secondCardId === '5')
      ) {
        graphId = 'Ro-A';
      }

      // Mostrar el gráfico en la segunda columna
      secondChoiceContainer.textContent = graphId;

      // Reiniciar la selección de cartas
      selectedCards = [];
    }
  });
});