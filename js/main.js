// Лёгкий JS. Сайт полностью работает и без него.
// Фасад плеера: iframe появляется только по клику (без автоплея).
(function () {
  var btn = document.querySelector('[data-embed]');
  if (!btn) return;
  var src = btn.getAttribute('data-embed');
  // Разрешаем только YouTube (без cookie) и Spotify.
  var ok = /^https:\/\/(www\.youtube-nocookie\.com\/embed\/|open\.spotify\.com\/embed\/)/.test(src);
  if (!ok) return; // пока ссылки нет, кнопка Play остаётся скрытой
  btn.hidden = false;
  btn.addEventListener('click', function () {
    var cover = document.querySelector('.cover');
    var f = document.createElement('iframe');
    f.src = src;
    f.title = btn.getAttribute('data-title') || 'Player';
    f.allow = 'encrypted-media; picture-in-picture';
    f.loading = 'lazy';
    cover.replaceChildren(f);
    btn.hidden = true;
  });
})();
