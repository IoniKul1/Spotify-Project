window.onload = function() {
    var songGraph = document.getElementById("song-graph");
    var ctx = songGraph.getContext("2d");
  
    var songSelect = document.getElementById("song-select");
    var audioPlayer = document.getElementById("audio-player");
    var audioContext = new (window.AudioContext || window.webkitAudioContext)();
    var audioSource = audioContext.createMediaElementSource(audioPlayer);
    var analyser = audioContext.createAnalyser();
  
    // Configuración del analizador de audio
    analyser.fftSize = 2048;
    var bufferLength = analyser.frequencyBinCount;
    var dataArray = new Uint8Array(bufferLength);
  
    audioSource.connect(analyser);
    audioSource.connect(audioContext.destination);
  
    // Configuración del gráfico
    var graphHeight = songGraph.height;
    var graphWidth = songGraph.width;
    var barWidth = graphWidth / bufferLength;
    var maxBarHeight = graphHeight / 2;
  
    // Dibuja el gráfico interactivo
    function drawGraph() {
      analyser.getByteFrequencyData(dataArray);
  
      ctx.clearRect(0, 0, graphWidth, graphHeight);
  
      ctx.fillStyle = "#239419";
  
      var x = 0;
  
      for (var i = 0; i < bufferLength; i++) {
        var barHeight = dataArray[i] / 255 * maxBarHeight;
  
        ctx.fillRect(x, graphHeight - barHeight, barWidth, barHeight);
  
        x += barWidth;
      }
  
      requestAnimationFrame(drawGraph);
    }
  
    // Cambiar la canción cuando se seleccione una opción diferente
    songSelect.addEventListener("change", function() {
      var selectedSong = songSelect.value;
      audioPlayer.src = selectedSong;
      audioContext.resume().then(() => {
        drawGraph();
      });
    });
  
    // Reproducir la canción y dibujar el gráfico
    audioPlayer.addEventListener("play", function() {
      audioContext.resume().then(() => {
        drawGraph();
      });
    });
  };
  