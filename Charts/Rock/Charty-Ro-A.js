const dataRoA = {
  labels: ['Valence', 'Danceability', 'Energy', 'Instrumentalness', 'Popularity', 'Speachness'],
  datasets: [{
    label: 'Rock',
    data: [71.92999999999999, 60.75, 76.74000000000001, 6.248304999999999, 40.7, 7.048000000000001],
    fill: true,
    backgroundColor: 'rgb(255,0,0,0.2)',
    borderColor: 'rgb(255,0,0)',
    pointBackgroundColor: 'rgb(255,0,0)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255,0,0)'
  }, { 
    label: 'Alternative',
    data: [27.9681, 40.9, 53.239000000000004, 43.56630299999999, 17.9, 4.684],
    fill: true,
    backgroundColor: 'rgb(240,230,140,0.2)',
    borderColor: 'rgb(240,230,140)',
    pointBackgroundColor: 'rgb(240,230,140)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(240,230,140)'
  }],
};

const configRoA = {
  type: 'radar',
  data: dataRoA,
  options: {
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
  }
};
const radarChartRoA = new Chart(document.getElementById('Ro-A'), configRoA);
