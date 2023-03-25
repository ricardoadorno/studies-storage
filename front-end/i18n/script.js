function detectLang() {
  var lang = navigator.languages;
  lang.find((element) => {
    if (element === "pt-BR" || element === "pt") {
      window.location.href = "index-pt.html";
    }
  });
}

// load a function only when a specific page is loaded
if (window.location.href === "index.html") {
  detectLang();
}

// langSelector.addEventListener("change", changeLang);
// change index.html to index-pt.html with a input select
function changeLang() {
  if (langSelector.value === "pt") {
    window.location.href = "index-pt.html";
  } else if (langSelector.value === "en") {
    window.location.href = "index.html";
  }
}
