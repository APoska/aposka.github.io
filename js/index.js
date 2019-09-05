document.getElementById('contactAnchor').addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#contact').offsetTop - 75,
    behavior: 'smooth'
  });
});
document.getElementById('offerAnchor').addEventListener('click', function() {
  window.scrollTo({
    top: document.querySelector('#offer').offsetTop - 75,
    behavior: 'smooth'
  });
});
