go = ($url, $target = "_self") => 
{
  window.open($url, $target);
};
dataHref = document.querySelectorAll("[data-href]");
dataHref.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    go(btn.getAttribute("data-href") , btn.getAttribute('data-target') ? btn.getAttribute('data-target') : '_self');
  });
});