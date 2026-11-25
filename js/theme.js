// Тема: по умолчанию как в системе; кнопка в шапке запоминает выбор в браузере.
(function () {
  var root = document.documentElement, KEY = "theme";
  try { var saved = localStorage.getItem(KEY); if (saved === "light" || saved === "dark") root.dataset.theme = saved; } catch (e) {}
  function current() {
    return root.dataset.theme || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
  }
  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector(".theme-toggle");
    if (!btn) return;
    btn.hidden = false;
    function sync() { btn.setAttribute("aria-pressed", current() === "light"); btn.textContent = current() === "light" ? "\u263E" : "\u2600"; }
    btn.addEventListener("click", function () {
      var next = current() === "light" ? "dark" : "light";
      root.dataset.theme = next;
      try { localStorage.setItem(KEY, next); } catch (e) {}
      sync();
    });
    sync();
  });
})();
