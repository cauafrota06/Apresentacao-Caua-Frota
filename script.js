const text = [
  "Pesquisador em Tecnologia"
];

let index = 0;
let charIndex = 0;


function typeEffect() {
  if (charIndex < text[index].length) {
    typingElement.innerHTML += text[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 60);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.innerHTML = text[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 30);
  } else {
    index = (index + 1) % text.length;
    setTimeout(typeEffect, 300);
  }
}

typeEffect();