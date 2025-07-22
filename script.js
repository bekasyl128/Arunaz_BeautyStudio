
document.getElementById('booking-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('status').innerText = 'Спасибо! Ваша заявка отправлена.';
  this.reset();
});
