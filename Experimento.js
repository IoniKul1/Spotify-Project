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
var song_2;

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
    document.getElementById("songButton1").innerText = "Losing It - Fisher";
    document.getElementById("songButton2").innerText = "Consciousness - Anyma, Avantgarde";
    document.getElementById("songButton3").innerText = "Love Tonight (Edit) - Shouse";
  } else if (genre === "Cachengue") {
    document.getElementById("songButton1").innerText = "M.A (remix) - BM, Callejero Fino, La Joaqui";
    document.getElementById("songButton2").innerText = "Los del espacio - LIT killah, Duki";
    document.getElementById("songButton3").innerText = "PUNTO G - Quevedo";
  } else if (genre === "Rap") {
    document.getElementById("songButton1").innerText = "RNP Cordae, (feat. Anderson .Paak)";
    document.getElementById("songButton2").innerText = "The Real Slim Shady - Eminem";
    document.getElementById("songButton3").innerText = "No Role Modelz - J. Cole";
  }
}

function showQuestion3() {
  document.getElementById("question2").classList.add("hidden");
  document.getElementById("question3").classList.remove("hidden");
  if (genre === "Techno") {
    document.getElementById("song_2Button1").innerText = "Losing Fisher";
    document.getElementById("song_2Button2").innerText = "Consciousness Avantgarde";
    document.getElementById("song_2Button3").innerText = "Love Shouse)";
  } else if (genre === "Cachengue") {
    document.getElementById("song_2Button1").innerText = "M.A Joaqui";
    document.getElementById("song_2Button2").innerText = "Los Duki";
    document.getElementById("song_2Button3").innerText = "PUNTO Quevedo";
  } else if (genre === "Rap") {
    document.getElementById("song_2Button1").innerText = "RNP Paak)";
    document.getElementById("song_2Button2").innerText = "The Eminem";
    document.getElementById("song_2Button3").innerText = "No Cole";
  }
}


document.getElementById("songButton1").addEventListener("click", function() {
  song = getSongOption(1);
  showQuestion3();
});

document.getElementById("songButton2").addEventListener("click", function() {
  song = getSongOption(2);
  showQuestion3();
});

document.getElementById("songButton3").addEventListener("click", function() {
  song = getSongOption(3);
  showQuestion3();
});


document.getElementById("song_2Button1").addEventListener("click", function() {
  song_2 = getSongOption_2(1);
  showResult();
});

document.getElementById("song_2Button2").addEventListener("click", function() {
  song_2 = getSongOption_2(2);
  showResult();
});

document.getElementById("song_2Button3").addEventListener("click", function() {
  song_2 = getSongOption_2(3);
  showResult();
});

function getSongOption(option) {
  if (genre === "Techno") {
    if (option === 1) {
      return "Losing It - Fisher";
    } else if (option === 2) {
      return "Consciousness - Anyma, Avantgarde";
    } else if (option === 3) {
      return "Love Tonight (Edit) - Shouse";
    }
  } else if (genre === "Cachengue") {
    if (option === 1) {
      return "M.A (remix) - BM, Callejero Fino, La Joaqui";
    } else if (option === 2) {
      return "Los del espacio - LIT killah, Duki";
    } else if (option === 3) {
      return "PUNTO G - Quevedo";
    }
  } else if (genre === "Rap") {
    if (option === 1) {
      return  "RNP Cordae, (feat. Anderson .Paak)";
    } else if (option === 2) {
      return "The Real Slim Shady - Eminem";
    } else if (option === 3) {
      return "No Role Modelz - J. Cole";
    }
  }
}

function getSongOption_2(option) {
  if (genre === "Techno") {
    if (option === 1) {
      return "Losing Fisher";
    } else if (option === 2) {
      return "Consciousness Avantgarde";
    } else if (option === 3) {
      return "Love Shouse)";
    }
  } else if (genre === "Cachengue") {
    if (option === 1) {
      return "M.A Joaqui";
    } else if (option === 2) {
      return "Los Duki";
    } else if (option === 3) {
      return "PUNTO Quevedo";
    }
  } else if (genre === "Rap") {
    if (option === 1) {
      return  "RNP Paak)";
    } else if (option === 2) {
      return "The Eminem";
    } else if (option === 3) {
      return "No Cole";
    }
  }
}

function showResult() {
  document.getElementById("question2").classList.add("hidden");
  document.getElementById("question3").classList.add("hidden");
  document.getElementById("loading").classList.remove("hidden");
  setTimeout(function() {
  document.getElementById("loading").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("selections").innerText = "";
  document.getElementById("resultText").innerText = getResultText();
  document.querySelector(".container-icon").style.display = "block";
  }, 1000);
}

function getResultText() {
  if (genre === "Techno") {
    if (song === "Losing It - Fisher" && song_2 === "Losing Fisher") {
      return "March of the forest cat";
    } else if (song === "Losing It - Fisher" && song_2 === "Consciousness Avantgarde") {
      return "March of the forest cat_2";
    } else if (song === "Losing It - Fisher" && song_2 === "Love Shouse)") {
      return "March of the forest cat_3";
    } 
    else if (song === "Consciousness - Anyma, Avantgarde"  && song_2 === "Consciousness Avantgarde") {
      return "Blind light";
    } else if (song === "Consciousness - Anyma, Avantgarde"  && song_2 === "Losing Fisher") {
      return "Blind light_2";
    } else if (song === "Consciousness - Anyma, Avantgarde"  && song_2 === "Love Shouse)") {
      return "Blind light_3";
    } 
      else if (song === "Love Tonight (Edit) - Shouse" && song_2 === "Love Shouse)") {
      return "Childs";
    } else if (song === "Love Tonight (Edit) - Shouse" && song_2 === "Consciousness Avantgarde") {
      return "Childs_2";
    } else if (song === "Love Tonight (Edit) - Shouse" && song_2 === "Losing Fisher") {
      return "Childs_3";
    } 
  } else if (genre === "Cachengue") {
    if (song === "M.A (remix) - BM, Callejero Fino, La Joaqui" && song_2 === "M.A Joaqui") {
      return "Espacio";
    } else if (song ===  "M.A (remix) - BM, Callejero Fino, La Joaqui" && song_2 === "Los Duki") {
      return "Espacio_2";
    } else if (song ===  "M.A (remix) - BM, Callejero Fino, La Joaqui" && song_2 === "PUNTO Quevedo") {
      return "Espacio_3";
    } 
      else if (song === "Los del espacio - LIT killah, Duki" && song_2 === "Los Duki") {
      return "nose.mp3";
    } else if (song === "Los del espacio - LIT killah, Duki" && song_2 === "M.A Joaqui") {
      return "nose.mp3_2";
    } else if (song === "Los del espacio - LIT killah, Duki" && song_2 === "PUNTO Quevedo") {
      return "nose.mp3_3";
    } 
      else if (song === "PUNTO G - Quevedo" && song_2 === "PUNTO Quevedo") {
      return "Tumbando el club";
    } else if (song === "PUNTO G - Quevedo" && song_2 === "Los Duki") {
      return "Tumbando el club_2";
    } else if (song === "PUNTO G - Quevedo" && song_2 === "M.A Joaqui") {
      return "Tumbando el club_3";
    }

  } else if (genre === "Rap") {
    if (song ===  "RNP Cordae, (feat. Anderson .Paak)" && song_2 === "RNP Paak)") {
      return "No role modelz";
    } else if (song ===  "RNP Cordae, (feat. Anderson .Paak)" && song_2 === "The Eminem") {
      return "No role modelz_2";
    } else if (song ===  "RNP Cordae, (feat. Anderson .Paak)" && song_2 === "No Cole") {
      return "No role modelz_3";
    }
    else if (song === "The Real Slim Shady - Eminem" && song_2 === "The Eminem") {
      return "Stupidity";
    } else if (song === "The Real Slim Shady - Eminem" && song_2 === "RNP Paak)") {
      return "Stupidity_2";
    } else if (song === "The Real Slim Shady - Eminem" && song_2 === "No Cole") {
      return "Stupidity_3";
    }
      else if (song === "No Role Modelz - J. Cole" && song_2 === "No Cole") {
      return "Curtain call";
    } else if (song === "No Role Modelz - J. Cole" && song_2 === "The Eminem") {
      return "Curtain call_2";
    } else if (song === "No Role Modelz - J. Cole" && song_2 === "RNP Paak)") {
      return "Curtain call_3";
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


