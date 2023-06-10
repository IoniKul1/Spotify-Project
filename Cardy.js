const cards = document.querySelectorAll('.card');
let selectedCards = [];

cards.forEach(card => {
  card.addEventListener('click', () => {
    if (selectedCards.length < 2 || card.classList.contains('selected')) {
      card.classList.toggle('selected');
      if (card.classList.contains('selected')) {
        selectedCards.push(card);
      } else {
        selectedCards = selectedCards.filter(selectedCard => selectedCard !== card);
      }
    }
  });
});