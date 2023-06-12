  // Obtener el elemento del radar chart
  const radarChart = document.getElementById('n').getContext('2d');

  // Configurar el gráfico de radar vacío
  const emptyData = {
    labels: ['Valence', 'Danceability', 'Energy', 'Instrumentalness', 'Popularity', 'Speachness'],
    datasets: [{
      label: '',
      data: [0, 0, 0, 0, 0, 0],
      fill: true,
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      pointBackgroundColor: 'transparent',
      pointBorderColor: 'transparent',
      pointHoverBackgroundColor: 'transparent',
      pointHoverBorderColor: 'transparent'
    }]
  };

  const emptyOptions = {
    plugins: {
      legend: {
        labels: {
          color: 'white'
        }
      }
    },
    scales: {
      r: {
        angleLines: {
          color: 'transparent'
        },
        grid: {
          color: 'white'
        },
        pointLabels: {
          color: 'white'
        },
        ticks: {
          color: 'black'
        },
      }
    }
  };

  // Crear el gráfico de radar vacío
  const emptyRadarChart = new Chart(radarChart, {
    type: 'radar',
    data: emptyData,
    options: emptyOptions
  });


