var quotes = [
  "'The future belongs to those who prepare for it today.' - Malcolm X",
  "'Design is not just what it looks like and feels like. Design is how it works.' - Steve Jobs",
  "'Success is where preparation and opportunity meet.' - Bobby Unser",
  "'Being an entrepreneur is like eating glass and staring into the abyss of death.' - Elon Musk",
  "'The future rewards those who press on.' - Barack Obama"
];

function randomQuote() {
  document.getElementById('quote').innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
}
