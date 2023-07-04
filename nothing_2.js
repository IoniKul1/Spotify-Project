  // Obtener el elemento del radar chart
  const radarChart_2 = document.getElementById('n_2').getContext('2d');

  // Configurar el gráfico de radar vacío
  const emptyData_2 = {
    labels: ['Valence', 'Danceability', 'Energy', 'Instrumentalness', 'Popularity', 'Speechiness'],
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

  const emptyOptions_2 = {
    plugins: {
      legend: {
        labels: {
          color: 'black',
          font: {
            family: 'Domine, serif',
            size: 14,
          }

        }
      }
    },
    scales: {
      r: {
        angleLines: {
          color: 'transparent'
        },
        grid: {
          color: 'black'
        },
        pointLabels: {
          color: 'black',
          font: {
            family: 'Domine, serif',
            size: 14,
          }
        },
        ticks: {
          color: 'black',
          font: {
            family: 'Domine, serif',
          }
        },
      }
    }
  };
  // Crear el gráfico de radar vacío
  const emptyRadarChart_2 = new Chart(radarChart_2, {
    type: 'radar',
    data: emptyData_2,
    options: emptyOptions_2
  });