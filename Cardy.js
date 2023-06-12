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

