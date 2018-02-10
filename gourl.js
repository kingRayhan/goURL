go = function go($url) {
  var $target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "_self";

  window.open($url, $target);
};
dataHref = document.querySelectorAll("[data-href]");
dataHref.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    go(btn.getAttribute("data-href"), btn.getAttribute('data-target') ? btn.getAttribute('data-target') : '_self');
  });
});