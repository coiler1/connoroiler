// Small JS to add keyboard accessible overlays and any future interactions
document.addEventListener('DOMContentLoaded', function(){
  // make ex-cards focusable for keyboard users
  document.querySelectorAll('.ex-card').forEach(card => {
    card.setAttribute('tabindex', '0');
  });
});