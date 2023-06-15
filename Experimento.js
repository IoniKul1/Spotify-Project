
document.getElementById("playButton").addEventListener("click", function() {
  document.getElementById("title").classList.add("fade-out");
  document.getElementById("playButton").classList.add("fade-out");
  setTimeout(function() {
    document.getElementById("title").style.display = "none";
    document.getElementById("playButton").style.display = "none";
    document.getElementById("question1").classList.remove("hidden");
    document.getElementById("question1").classList.add("fade-in", "active");
  }, 500);
});

// Resto del código sin cambios


var genre;
var song;

document.getElementById("technoButton").addEventListener("click", function() {
  genre = "Techno";
  showQuestion2();
});

document.getElementById("cachengueButton").addEventListener("click", function() {
  genre = "Cachengue";
  showQuestion2();
});

document.getElementById("rapButton").addEventListener("click", function() {
  genre = "Rap";
  showQuestion2();
});

function showQuestion2() {
  document.getElementById("question1").classList.add("hidden");
  document.getElementById("question2").classList.remove("hidden");
  if (genre === "Techno") {
    document.getElementById("songButton1").innerText = "Afterlife";
    document.getElementById("songButton2").innerText = "deko";
    document.getElementById("songButton3").innerText = "Capadoccia";
  } else if (genre === "Cachengue") {
    document.getElementById("songButton1").innerText = "MA";
    document.getElementById("songButton2").innerText = "Espacio";
    document.getElementById("songButton3").innerText = "Modo Diablo";
  } else if (genre === "Rap") {
    document.getElementById("songButton1").innerText = "RNP";
    document.getElementById("songButton2").innerText = "Donda";
    document.getElementById("songButton3").innerText = "Slim";
  }
}

document.getElementById("songButton1").addEventListener("click", function() {
  song = getSongOption(1);
  showResult();
});

document.getElementById("songButton2").addEventListener("click", function() {
  song = getSongOption(2);
  showResult();
});

document.getElementById("songButton3").addEventListener("click", function() {
  song = getSongOption(3);
  showResult();
});

function getSongOption(option) {
  if (genre === "Techno") {
    if (option === 1) {
      return "Afterlife";
    } else if (option === 2) {
      return "deko";
    } else if (option === 3) {
      return "Capadoccia";
    }
  } else if (genre === "Cachengue") {
    if (option === 1) {
      return "MA";
    } else if (option === 2) {
      return "Espacio";
    } else if (option === 3) {
      return "Modo Diablo";
    }
  } else if (genre === "Rap") {
    if (option === 1) {
      return "RNP";
    } else if (option === 2) {
      return "Donda";
    } else if (option === 3) {
      return "Slim";
    }
  }
}

function showResult() {
  document.getElementById("question2").classList.add("hidden");
  document.getElementById("loading").classList.remove("hidden");
  setTimeout(function() {
    document.getElementById("loading").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("selections").innerText = "A partir de tus elecciones el algoritmo a concurrido lo siguiente:";
    document.getElementById("resultText").innerText = getResultText();
    document.querySelector(".container-icon").style.display = "block";
  }, 1000);
}

function getResultText() {
  if (genre === "Techno") {
    if (song === "Afterlife") {
      return "March of the forest cat";
    } else if (song === "deko") {
      return "Blind light";
    } else if (song === "Capadoccia") {
      return "Childs";
    }
  } else if (genre === "Cachengue") {
    if (song === "MA") {
      return "Espacio";
    } else if (song === "Espacio") {
      return "nose.mp3";
    } else if (song === "Modo Diablo") {
      return "Tumbando el club";
    }
  } else if (genre === "Rap") {
    if (song === "RNP") {
      return "No role modelz";
    } else if (song === "Donda") {
      return "Stupidity";
    } else if (song === "Slim") {
      return "Curtain call";
    }
  }
}

window.addEventListener("scroll", function() {
  var myDiv = document.getElementById("algoritmo");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 70) {
    myDiv.style.display = "block";
  } else {
    myDiv.style.display = "none";
  }
});

window.addEventListener("scroll", function() {
  var algoritmo = document.getElementById("algoritmo");
  var windowHeight = window.innerHeight;
  var scrollPosition = window.scrollY;

  var triggerPoint = scrollPosition + (windowHeight * 0.75); // Punto de mayor opacidad al 75% de la altura de la ventana
  var divPosition = algoritmo.offsetTop;

  if (triggerPoint > divPosition) {
    var distance = triggerPoint - divPosition;
    var opacity = 1 - (distance / (windowHeight * 0.25)); // Opacidad aumenta en la última parte del desplazamiento
    opacity = Math.max(opacity, 0);
    
    if (opacity === 1 || (scrollPosition + windowHeight) >= document.body.scrollHeight) {
      opacity = 1; // Establece la opacidad en 1 si alcanzaste el final de la página
    }
    
    algoritmo.style.opacity = opacity;
    
    if (opacity === 1) {
      // Alcanzó una opacidad de 1, puedes realizar alguna acción adicional si lo deseas
    }
  }
});

const text = 'Bienvenido',
      speed = 150,
      textContainer = document.querySelector('.title-typo');
let i = 0;

function typewriting() {
  if(i < text.length) {
    textContainer.textContent += text[i];
    i++;
    setTimeout(typewriting, speed);
  }
}
setTimeout(typewriting, 1000);


const text_2 = 'Aprieta play para empezar con el experimento',
      speed_2 = 50,
      textContainer_2 = document.querySelector('.title-typo_2');
let l = 0;

function typewriting_2() {
  if(l < text_2.length) {
    textContainer_2.textContent += text_2[l];
    l++;
    setTimeout(typewriting_2, speed_2);
  }
}
setTimeout(typewriting_2, 3000);


const text_3 = 'Que genero sueles escuchar?',
      speed_3 = 50,
      textContainer_3 = document.querySelector('.title-typo_3');
let m = 0;
