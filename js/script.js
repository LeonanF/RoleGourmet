$(document).ready(function() {
    var frase = $(".frase");
    var texto = frase.contents().filter(function() {
        return this.nodeType === 3;
    });
    texto.each(function() {
        var conteudo = $(this).text();
        var palavras = conteudo.split(" ");
        var html = "";
        for (var i = 0; i < palavras.length; i++) {
            html += "<span class='letra'>" + palavras[i] + "</span> ";
        }
        $(this).replaceWith(html.trim());
    });
    $(".frase .letra").each(function(i) {
        $(this).css("animation-delay", i * 0.09 + "s");
    });
});

$(document).ready(function() {
    for (let i = 0; i < 200; i++) {
      let x = Math.floor(Math.random() * window.innerWidth);
      let y = Math.floor(Math.random() * window.innerHeight*(2));
      let star = document.createElement("div");
      star.classList.add("star");
      star.style.left = x + "px";
      star.style.top = y + "px";
      document.querySelector(".stars").appendChild(star);
    }

  });