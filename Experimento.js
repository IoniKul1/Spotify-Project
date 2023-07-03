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
    document.getElementById("song_2Button3").innerText = "You Litle Beauty - FISHER";
  } else if (genre === "Cachengue") {
    document.getElementById("song_2Button1").innerText = "Quevedo Bzrp Music Session: Vol. 52";
    document.getElementById("song_2Button2").innerText = "BESO - ROSALÍA, Rauw Alejandro";
    document.getElementById("song_2Button3").innerText = "GIVENCHY - Duki";
  } else if (genre === "Rap") {
    document.getElementById("song_2Button1").innerText = "God's Plan - Drake";
    document.getElementById("song_2Button2").innerText = "The Climb Back - J. Cole";
    document.getElementById("song_2Button3").innerText = "Stan - Eminem";
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
      promedio = 64.795
      return "Losing It - Fisher";
    } else if (option === 2) {
      promedio = 51.053
      return "Consciousness - Anyma, Avantgarde";
    } else if (option === 3) {
      promedio = 44.213
      return "Love Tonight (Edit) - Shouse";
    }
  } else if (genre === "Cachengue") {
    if (option === 1) {
      promedio = 52.050
      return "M.A (remix) - BM, Callejero Fino, La Joaqui";
    } else if (option === 2) {
      promedio = 50.986
      return "Los del espacio - LIT killah, Duki";
    } else if (option === 3) {
      promedio = 51.298
      return "PUNTO G - Quevedo";
    }
  } else if (genre === "Rap") {
    if (option === 1) {
      promedio = 58.316
      return  "RNP Cordae, (feat. Anderson .Paak)";
    } else if (option === 2) {
      promedio = 55.286
      return "The Real Slim Shady - Eminem";
    } else if (option === 3) {
      promedio = 49.233
      return "No Role Modelz - J. Cole";
    }
  }
}

function getSongOption_2(option) {
  if (genre === "Techno") {
    if (option === 1) {
      promedio_2 = 63.036
      return "Soul Sacrifice - Dombresky";
    } else if (option === 2) {
      promedio_2 = 50.610
      return "Friends - Solomun";
    } else if (option === 3) {
      promedio_2 = 44.235
      return "Shooting Arrows - Lane 8, POLIÇA, Matt Fax";
    }
  } else if (genre === "Cachengue") {
    if (option === 1) {
      promedio_2 = 50.091
      return "qué le pasa conmigo? - Nicki Nicole, Rels B";
    } else if (option === 2) {
      promedio_2 = 50.647
      return "BESO - ROSALÍA, Rauw Alejandro";
    } else if (option === 3) {
      promedio_2 = 51.298
      return "Quiero Creer - Luck Ra, La T y La M, Rusherking";
    }
  } else if (genre === "Rap") {
    if (option === 1) {
      promedio_2 = 56.466
      return  "WHATS POPPIN - Jack Harlow";
    } else if (option === 2) {
      promedio_2 = 55.365
      return "It Was A Good Day - Ice Cube";
    } else if (option === 3) {
      promedio_2 = 49.233
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
    if (song === "Losing It - Fisher") {
      promedio_3 = 64.795;
      promedio_4 = 64.750;
      document.getElementById('Lo').style.visibility = 'visible';
      result = "Ya Kidding - FISHER";
      return result;
    } else if (song === "Consciousness - Anyma, Avantgarde") {
      promedio_3 = 51.053;
      promedio_4 = 51.001;
      document.getElementById('Cons').style.visibility = 'visible';
      result = "In The Wild - Dee Montero, Meliha";
      return result;
    } else if (song === "Love Tonight (Edit) - Shouse" ) {
      promedio_3 = 44.213;
      promedio_3 = 44.235;
      document.getElementById('Love').style.visibility = 'visible';
      result = "Shooting Arrows - Lane 8, POLIÇA, Matt Fax";
      return result;
    } 
  } else if (genre === "Cachengue") {
    if (song === "M.A (remix) - BM, Callejero Fino, La Joaqui") {
      promedio_3 = 51.213;
      promedio_4 = 51.091;
      document.getElementById('MA').style.visibility = 'visible';
      result = "qué le pasa conmigo? - Nicki Nicole, Rels B";
      return result;
    } else if (song === "Los del espacio - LIT killah, Duki") {
      promedio_3 = 51.486;
      promedio_4 = 51.470;
      document.getElementById('Esp').style.visibility = 'visible';
      result = "Hey Mor - Ozuna, Feid";
      return result;
    } else if (song === "PUNTO G - Quevedo") {
      promedio_3 = 51.253;
      promedio_4 = 51.298;
      document.getElementById('Punto').style.visibility = 'visible';
      result = "Quiero Creer - Luck Ra, La T y La M, Rusherking";
      return result;
    }
  } else if (genre === "Rap") {
    if (song ===  "RNP Cordae, (feat. Anderson .Paak)") {
      promedio_3 = 58.483;
      promedio_4 = 56.466;
      document.getElementById('RNP').style.visibility = 'visible';
      result = "WHATS POPPIN - Jack Harlow";
      return result;
    } else if (song === "The Real Slim Shady - Eminem") {
      promedio_3 = 55.453;
      promedio_4 = 55.368;
      document.getElementById('Slim').style.visibility = 'visible';
      result = "It Was A Good Day - Ice Cube";
      return result;
    } else if (song === "No Role Modelz - J. Cole") {
      promedio_3 = 49.233;
      promedio_4 = 49.233;
      document.getElementById('NoRole').style.visibility = 'visible';
      result = "XO Tour Llif3  Lil Uzi Vert";
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
