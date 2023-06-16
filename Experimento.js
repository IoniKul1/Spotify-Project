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
    document.getElementById("song_2Button1").innerText = "Soul Sacrifice - Dombresky";
    document.getElementById("song_2Button2").innerText = "Friends - Solomun";
    document.getElementById("song_2Button3").innerText = "Shooting Arrows - Lane 8, POLIÇA, Matt Fax";
  } else if (genre === "Cachengue") {
    document.getElementById("song_2Button1").innerText = "qué le pasa conmigo? - Nicki Nicole, Rels B";
    document.getElementById("song_2Button2").innerText = "BESO - ROSALÍA, Rauw Alejandro";
    document.getElementById("song_2Button3").innerText = "Quiero Creer - Luck Ra, La T y La M, Rusherking";
  } else if (genre === "Rap") {
    document.getElementById("song_2Button1").innerText = "WHATS POPPIN - Jack Harlow";
    document.getElementById("song_2Button2").innerText = "It Was A Good Day - Ice Cube";
    document.getElementById("song_2Button3").innerText = "XO Tour Llif3 - Lil Uzi Vert";
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
      return "Soul Sacrifice - Dombresky";
    } else if (option === 2) {
      return "Friends - Solomun";
    } else if (option === 3) {
      return "Shooting Arrows - Lane 8, POLIÇA, Matt Fax";
    }
  } else if (genre === "Cachengue") {
    if (option === 1) {
      return "qué le pasa conmigo? - Nicki Nicole, Rels B";
    } else if (option === 2) {
      return "BESO - ROSALÍA, Rauw Alejandro";
    } else if (option === 3) {
      return "Quiero Creer - Luck Ra, La T y La M, Rusherking";
    }
  } else if (genre === "Rap") {
    if (option === 1) {
      return  "WHATS POPPIN - Jack Harlow";
    } else if (option === 2) {
      return "It Was A Good Day - Ice Cube";
    } else if (option === 3) {
      return "XO Tour Llif3 - Lil Uzi Vert";
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
    if (song === "Losing It - Fisher" && song_2 === "Soul Sacrifice - Dombresky") {
      return "Heads Will Roll - Remix - DJ In2ition";
    } else if (song === "Losing It - Fisher" && song_2 === "Friends - Solomun") {
      return "The Groovy Cat - PAWSA";
    } else if (song === "Losing It - Fisher" && song_2 === "Shooting Arrows - Lane 8, POLIÇA, Matt Fax") {
      return "Maybe Not - Jan Blomqvist";
    } 
    else if (song === "Consciousness - Anyma, Avantgarde"  && song_2 === "Friends - Solomun") {
      return "Floyd - Avoure";
    } else if (song === "Consciousness - Anyma, Avantgarde"  && song_2 === "Soul Sacrifice - Dombresky") {
      return "Pump It Up - Endor";
    } else if (song === "Consciousness - Anyma, Avantgarde"  && song_2 === "Shooting Arrows - Lane 8, POLIÇA, Matt Fax") {
      return "Lie Alone - 16BL Remix - L. Doblado";
    } 
      else if (song === "Love Tonight (Edit) - Shouse" && song_2 === "Shooting Arrows - Lane 8, POLIÇA, Matt Fax") {
      return "Is This Our Earth? - Lane 8";
    } else if (song === "Love Tonight (Edit) - Shouse" && song_2 === "Friends - Solomun") {
      return "Silence - Kidnap";
    } else if (song === "Love Tonight (Edit) - Shouse" && song_2 === "Soul Sacrifice - Dombresky") {
      return "March of the Forest Cat - Lane 8";
    } 
  } else if (genre === "Cachengue") {
    if (song === "M.A (remix) - BM, Callejero Fino, La Joaqui" && song_2 === "qué le pasa conmigo? - Nicki Nicole, Rels B") {
      return "Yandel 150 - Yandel, Feid";
    } else if (song ===  "M.A (remix) - BM, Callejero Fino, La Joaqui" && song_2 === "BESO - ROSALÍA, Rauw Alejandro") {
      return "Hey Mor - Ozuna, Feid";
    } else if (song ===  "M.A (remix) - BM, Callejero Fino, La Joaqui" && song_2 === "Quiero Creer - Luck Ra, La T y La M, Rusherking") {
      return "Muñecas - TINI, La Joaqui, Steve Aoki";
    } 
      else if (song === "Los del espacio - LIT killah, Duki" && song_2 === "BESO - ROSALÍA, Rauw Alejandro") {
      return "Luck Ra | Mission 15 - Alan Gomez, Luck Ra";
    } else if (song === "Los del espacio - LIT killah, Duki" && song_2 === "qué le pasa conmigo? - Nicki Nicole, Rels B") {
      return "DISCOTEKA (feat. Locura Mix) - The La Planta, BM, Alejo Isakk, Locura Mix";
    } else if (song === "Los del espacio - LIT killah, Duki" && song_2 === "Quiero Creer - Luck Ra, La T y La M, Rusherking") {
      return "En La Intimidad - Remix - Tomy DJ, DJ Pirata, El Kaio";
    } 
      else if (song === "PUNTO G - Quevedo" && song_2 === "Quiero Creer - Luck Ra, La T y La M, Rusherking") {
      return "Ya No Vuelvas (Versión Cuarteto) - Luck Ra, La K'onga, Ke Personajes";
    } else if (song === "PUNTO G - Quevedo" && song_2 === "BESO - ROSALÍA, Rauw Alejandro") {
      return "DISPARA *** - Nicki Nicole, Milo j";
    } else if (song === "PUNTO G - Quevedo" && song_2 === "qué le pasa conmigo? - Nicki Nicole, Rels B") {
      return "Feliz Cumpleaños Ferxxo - Feid";
    }

  } else if (genre === "Rap") {
    if (song ===  "RNP Cordae, (feat. Anderson .Paak)" && song_2 === "WHATS POPPIN - Jack Harlow") {
      return "Sky - Playboi Carti";
    } else if (song ===  "RNP Cordae, (feat. Anderson .Paak)" && song_2 === "It Was A Good Day - Ice Cube") {
      return "Yes Indeed - Lil Baby, Drake";
    } else if (song ===  "RNP Cordae, (feat. Anderson .Paak)" && song_2 === "XO Tour Llif3 - Lil Uzi Vert") {
      return "Dior - Pop Smoke";
    }
    else if (song === "The Real Slim Shady - Eminem" && song_2 === "It Was A Good Day - Ice Cube") {
      return "Life Is Good (feat. Drake) - Future, Drake";
    } else if (song === "The Real Slim Shady - Eminem" && song_2 === "WHATS POPPIN - Jack Harlow") {
      return "20 Min - Lil Uzi Vert";
    } else if (song === "The Real Slim Shady - Eminem" && song_2 === "XO Tour Llif3 - Lil Uzi Vert") {
      return "SICKO MODE - Travis Scott";
    }
      else if (song === "No Role Modelz - J. Cole" && song_2 === "XO Tour Llif3 - Lil Uzi Vert") {
      return "After Party - Don Toliver";
    } else if (song === "No Role Modelz - J. Cole" && song_2 === "It Was A Good Day - Ice Cube") {
      return "Superman - Eminem, Dina Rae";
    } else if (song === "No Role Modelz - J. Cole" && song_2 === "WHATS POPPIN - Jack Harlow") {
      return "Drip Too Hard (Lil Baby & Gunna) - Lil Baby, Gunna";
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


