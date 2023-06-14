window.onload = function() {
  // Obtener elementos del DOM
  var canvas = document.getElementById('visualizer');
  var audio = document.getElementById('audio');
  var context = new AudioContext();
  var src = context.createMediaElementSource(audio);
  var analyser = context.createAnalyser();

  // Conectar nodos de audio
  src.connect(analyser);
  analyser.connect(context.destination);

  // Configurar el lienzo para visualización
  var canvasCtx = canvas.getContext('2d');
  var bufferLength = analyser.frequencyBinCount;
  var dataArray = new Uint8Array(bufferLength);

  function draw() {
    // Realizar la animación de visualización
    requestAnimationFrame(draw);

    // Obtener datos de amplitud del analizador
    analyser.getByteTimeDomainData(dataArray);

    // Limpiar el lienzo con transparencia
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

    // Configurar los estilos de visualización
    canvasCtx.lineWidth = 2;
    canvasCtx.strokeStyle = 'rgb(0, 255, 0)';
    canvasCtx.beginPath();

    var sliceWidth = canvas.width * 1.0 / bufferLength;
    var x = 0;

    // Dibujar la forma de onda en el lienzo
    for (var i = 0; i < bufferLength; i++) {
      var v = dataArray[i] / 128.0;
      var y = v * canvas.height / 2;

      if (i === 0) {
        canvasCtx.moveTo(x, y);
      } else {
        canvasCtx.lineTo(x, y);
      }

      x += sliceWidth;
    }

    canvasCtx.lineTo(canvas.width, canvas.height / 2);
    canvasCtx.stroke();
  }

  // Iniciar la visualización cuando se reproduce el audio
  audio.onplay = function() {
    context.resume();
    draw();
  };
};
