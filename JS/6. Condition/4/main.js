const select = document.querySelector('select');
const html = document.querySelector('.output');

select.addEventListener('change', () => {
  const choice = select.value;

  switch (choice) {
    case "white":
    update("white", "black");
    break;
    case "black":
    update("black", "white");
    break;          
    case "purple":
    update("purple", "white");
    break;
    case "yellow":
    update("yellow", "purple");
    break;
    case "psychedelic":
    update("lime", "purple");
    break;
  }
});

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}
