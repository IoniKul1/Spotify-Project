const text = '¿Como funciona el algoritmo recomendador de Spotify?',
      speed = 50,
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
setTimeout(typewriting_2, 4000);

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
      promedio = 54.91
      return "Losing It - Fisher";
    } else if (option === 2) {
      promedio = 54.91
      return "Consciousness - Anyma, Avantgarde";
    } else if (option === 3) {
      promedio = 54.91
      return "Love Tonight (Edit) - Shouse";
    }
  } else if (genre === "Cachengue") {
    if (option === 1) {
      promedio = 54.91
      return "M.A (remix) - BM, Callejero Fino, La Joaqui";
    } else if (option === 2) {
      promedio = 54.91
      return "Los del espacio - LIT killah, Duki";
    } else if (option === 3) {
      promedio = 54.91
      return "PUNTO G - Quevedo";
    }
  } else if (genre === "Rap") {
    if (option === 1) {
      promedio = 54.91
      return  "RNP Cordae, (feat. Anderson .Paak)";
    } else if (option === 2) {
      promedio = 54.91
      return "The Real Slim Shady - Eminem";
    } else if (option === 3) {
      promedio = 54.91
      return "No Role Modelz - J. Cole";
    }
  }
}

function getSongOption_2(option) {
  if (genre === "Techno") {
    if (option === 1) {
      promedio_2 = 54.92
      return "Soul Sacrifice - Dombresky";
    } else if (option === 2) {
      promedio_2 = 54.92
      return "Friends - Solomun";
    } else if (option === 3) {
      promedio_2 = 54.92
      return "Shooting Arrows - Lane 8, POLIÇA, Matt Fax";
    }
  } else if (genre === "Cachengue") {
    if (option === 1) {
      promedio_2 = 54.92
      return "qué le pasa conmigo? - Nicki Nicole, Rels B";
    } else if (option === 2) {
      promedio_2 = 54.92
      return "BESO - ROSALÍA, Rauw Alejandro";
    } else if (option === 3) {
      promedio_2 = 54.92
      return "Quiero Creer - Luck Ra, La T y La M, Rusherking";
    }
  } else if (genre === "Rap") {
    if (option === 1) {
      promedio_2 = 54.92
      return  "WHATS POPPIN - Jack Harlow";
    } else if (option === 2) {
      promedio_2 = 54.92
      return "It Was A Good Day - Ice Cube";
    } else if (option === 3) {
      promedio_2 = 54.92
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
  selections.result = getResultText();
  uno.innerHTML = "<br>"+song +"<br><br>" + "Promedio: " + promedio + "<br><br>";
  dos.innerHTML += "<br>"+song_2 +"<br><br>"+ "Promedio: "+ promedio_2 + "<br><br>";
  tres.innerHTML += "<br>"+result  +"<br><br>"+ "Promedio: "+ promedio_3 + "<br><br>";
}


function getResultText() {
  if (genre === "Techno") {
    if (song === "Losing It - Fisher" && song_2 === "Soul Sacrifice - Dombresky") {
      promedio_3 = 54.92
      result = "Heads Will Roll - Remix - DJ In2ition";
      return result;
    } else if (song === "Losing It - Fisher" && song_2 === "Friends - Solomun") {
      promedio_3 = 54.92
      result = "The Groovy Cat - PAWSA";
      return result;
    } else if (song === "Losing It - Fisher" && song_2 === "Shooting Arrows - Lane 8, POLIÇA, Matt Fax") {
      promedio_3 = 54.92
      result = "Maybe Not - Jan Blomqvist";
      return result;
    } 
    else if (song === "Consciousness - Anyma, Avantgarde"  && song_2 === "Friends - Solomun") {
      promedio_3 = 54.92
      result = "Floyd - Avoure";
      return result;
    } else if (song === "Consciousness - Anyma, Avantgarde"  && song_2 === "Soul Sacrifice - Dombresky") {
      promedio_3 = 54.92
      result = "Pump It Up - Endor";
      return result;
    } else if (song === "Consciousness - Anyma, Avantgarde"  && song_2 === "Shooting Arrows - Lane 8, POLIÇA, Matt Fax") {
      promedio_3 = 54.92
      result = "Lie Alone - 16BL Remix - L. Doblado";
      return result;
    } 
      else if (song === "Love Tonight (Edit) - Shouse" && song_2 === "Shooting Arrows - Lane 8, POLIÇA, Matt Fax") {
      promedio_3 = 54.92
      result = "Is This Our Earth? - Lane 8";
      return result;
    } else if (song === "Love Tonight (Edit) - Shouse" && song_2 === "Friends - Solomun") {
      promedio_3 = 54.92
      result = "Silence - Kidnap";
      return result;
    } else if (song === "Love Tonight (Edit) - Shouse" && song_2 === "Soul Sacrifice - Dombresky") {
      promedio_3 = 54.92
      result = "March of the Forest Cat - Lane 8";
      return result;
    } 
  } else if (genre === "Cachengue") {
    if (song === "M.A (remix) - BM, Callejero Fino, La Joaqui" && song_2 === "qué le pasa conmigo? - Nicki Nicole, Rels B") {
      promedio_3 = 54.92
      result = "Yandel 150 - Yandel, Feid";
      return result;
    } else if (song ===  "M.A (remix) - BM, Callejero Fino, La Joaqui" && song_2 === "BESO - ROSALÍA, Rauw Alejandro") {
      promedio_3 = 54.92
      result = "Hey Mor - Ozuna, Feid";
      return result;
    } else if (song ===  "M.A (remix) - BM, Callejero Fino, La Joaqui" && song_2 === "Quiero Creer - Luck Ra, La T y La M, Rusherking") {
      promedio_3 = 54.92
      result = "Muñecas - TINI, La Joaqui, Steve Aoki";
      return result;
    } else if (song === "Los del espacio - LIT killah, Duki" && song_2 === "BESO - ROSALÍA, Rauw Alejandro") {
      promedio_3 = 54.92
      result = "Luck Ra | Mission 15 - Alan Gomez, Luck Ra";
      return result;
    } else if (song === "Los del espacio - LIT killah, Duki" && song_2 === "qué le pasa conmigo? - Nicki Nicole, Rels B") {
      promedio_3 = 54.92
      result = "DISCOTEKA (feat. Locura Mix) - The La Planta, BM, Alejo Isakk, Locura Mix";
      return result;
    } else if (song === "Los del espacio - LIT killah, Duki" && song_2 === "Quiero Creer - Luck Ra, La T y La M, Rusherking") {
      promedio_3 = 54.92
      result = "En La Intimidad - Remix - Tomy DJ, DJ Pirata, El Kaio";
      return result;
    } 
      else if (song === "PUNTO G - Quevedo" && song_2 === "Quiero Creer - Luck Ra, La T y La M, Rusherking") {
      promedio_3 = 54.92
      result = "Ya No Vuelvas (Versión Cuarteto) - Luck Ra, La K'onga, Ke Personajes";
      return result;
    } else if (song === "PUNTO G - Quevedo" && song_2 === "BESO - ROSALÍA, Rauw Alejandro") {
      promedio_3 = 54.92
      result = "DISPARA *** - Nicki Nicole, Milo j"
      return result;
    } else if (song === "PUNTO G - Quevedo" && song_2 === "qué le pasa conmigo? - Nicki Nicole, Rels B") {
      promedio_3 = 54.92
      result = "Feliz Cumpleaños Ferxxo - Feid";
      return result;
    }

  } else if (genre === "Rap") {
    if (song ===  "RNP Cordae, (feat. Anderson .Paak)" && song_2 === "WHATS POPPIN - Jack Harlow") {
      promedio_3 = 54.93
      result = "Sky - Playboi Carti";
      return result;
    } else if (song ===  "RNP Cordae, (feat. Anderson .Paak)" && song_2 === "It Was A Good Day - Ice Cube") {
      promedio_3 = 54.93
      result = "Yes Indeed - Lil Baby, Drake";
      return result;
    } else if (song ===  "RNP Cordae, (feat. Anderson .Paak)" && song_2 === "XO Tour Llif3 - Lil Uzi Vert") {
      promedio_3 = 54.93
      result = "Dior - Pop Smoke"
      return result;
    }
    else if (song === "The Real Slim Shady - Eminem" && song_2 === "It Was A Good Day - Ice Cube") {
      promedio_3 = 54.93
      result = "Life Is Good (feat. Drake) - Future, Drake";
      return result;
    } else if (song === "The Real Slim Shady - Eminem" && song_2 === "WHATS POPPIN - Jack Harlow") {
      promedio_3 = 54.93
      result = "20 Min - Lil Uzi Vert";
      return result;
    } else if (song === "The Real Slim Shady - Eminem" && song_2 === "XO Tour Llif3 - Lil Uzi Vert") {
      promedio_3 = 54.93
      result = "SICKO MODE - Travis Scott";
      return result;
    } else if (song === "No Role Modelz - J. Cole" && song_2 === "XO Tour Llif3 - Lil Uzi Vert") {
      promedio_3 = 54.93
      result = "After Party - Don Toliver";
      return result;
    } else if (song === "No Role Modelz - J. Cole" && song_2 === "It Was A Good Day - Ice Cube") {
      promedio_3 = 54.93
      result = "Superman - Eminem, Dina Rae";
      return result;
    } else if (song === "No Role Modelz - J. Cole" && song_2 === "WHATS POPPIN - Jack Harlow") {
      promedio_3 = 54.93
      result = "Drip Too Hard (Lil Baby & Gunna) - Lil Baby, Gunna";
      return result;
    }
  }
}
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
