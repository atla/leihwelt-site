(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;

  function current() {
    return root.getAttribute('data-theme') || 'system';
  }

  function cycle() {
    var order = ['system', 'light', 'dark'];
    var i = order.indexOf(current());
    var next = order[(i + 1) % order.length];
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('leihwelt-theme', next); } catch (e) {}
    btn.title = 'Theme: ' + next + ' (click to cycle)';
    btn.setAttribute('aria-label', 'Color theme: ' + next + '. Click to change.');
  }

  btn.addEventListener('click', cycle);
  btn.title = 'Theme: ' + current() + ' (click to cycle)';
})();
