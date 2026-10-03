(function () {
  var grid = document.getElementById('project-grid');
  var btn = document.getElementById('load-more');
  if (!grid || !btn) return;

  var pageSize = parseInt(grid.getAttribute('data-page-size') || '8', 10);
  var cards = Array.prototype.slice.call(grid.querySelectorAll('[data-project-card]'));
  var shown = 0;

  function reveal() {
    var next = Math.min(shown + pageSize, cards.length);
    for (var i = shown; i < next; i++) {
      cards[i].classList.remove('is-hidden');
    }
    shown = next;
    if (shown >= cards.length) {
      btn.hidden = true;
    } else {
      btn.hidden = false;
      btn.textContent = 'Load more (' + (cards.length - shown) + ' left)';
    }
  }

  if (cards.length <= pageSize) {
    btn.hidden = true;
    return;
  }

  for (var i = pageSize; i < cards.length; i++) {
    cards[i].classList.add('is-hidden');
  }
  shown = pageSize;
  btn.hidden = false;
  btn.textContent = 'Load more (' + (cards.length - shown) + ' left)';
  btn.addEventListener('click', reveal);

  // Endless scroll: load when near bottom
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking || btn.hidden) return;
    ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      var near = window.innerHeight + window.scrollY >= document.body.offsetHeight - 480;
      if (near) reveal();
    });
  }, { passive: true });
})();
