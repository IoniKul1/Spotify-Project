const data = {
  labels: ['Valence', 'Danceability', 'Energy', 'Instrumentalness', 'Popularity', 'Speachness'],
  datasets: [{
    label: 'Melodic Techno music',
    data: [33.048, 62.09, 62.84, 61.4, 44.3, 2.98],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }, {
    label: 'Rap music',
    data: [57.15, 70.49, 61.13, 6.83, 73.4, 46.02],
    fill: true,
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    pointBackgroundColor: 'rgb(54, 162, 235)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 162, 235)'
  }]
};

const config = {
  type: 'radar',
  data: data,
  options: {
    elements: {
      line: {
        borderWidth: 3,
        borderColor: '#fff'  // Cambiar el color de las líneas a blanco
      },
      point: {
        backgroundColor: '#fff',  // Cambiar el color de los puntos a blanco
        borderColor: '#fff',  // Cambiar el color del borde de los puntos a blanco
        hoverBackgroundColor: '#fff',  // Cambiar el color de fondo al pasar el cursor sobre los puntos a blanco
        hoverBorderColor: '#fff'  // Cambiar el color del borde al pasar el cursor sobre los puntos a blanco
      }
    },
    scale: {
      pointLabels: {
        fontColor: '#fff'  // Cambiar el color de los textos de los ejes a blanco
      },
      angleLines: {
        color: '#fff'  // Cambiar el color de las líneas de los ejes a blanco
      },
      gridLines: {
        color: '#fff'  // Cambiar el color de las líneas de la cuadrícula a blanco
      },
      ticks: {
        Color: 'rgb(255,255,255)',  // Cambiar el color de los números de los ejes a blanco
        stepSize: 20,  // Cambiar el tamaño de los intervalos en el eje
        max: 100  // Cambiar el valor máximo del eje
      }
    }
  }
};

const radarChart = new Chart(document.getElementById('radarChart'), config);
