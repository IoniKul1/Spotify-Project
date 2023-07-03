const dataEsp = {
  labels: ['Valence', 'Danceability', 'Energy', 'Instrumentalness', 'Popularity', 'Speechiness'],
  datasets: [{
    label: 'Los del Espacio - LIT killah,(...), Big One, FMK',
    data: [63, 81, 68, 0, 92, 14],
    fill: true,
    backgroundColor: 'rgb(30,144,255,0.2)',
    borderColor: 'rgb(30,144,255)',
    pointBackgroundColor: 'rgb(30,144,255)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(30,144,255)'
  }, { 
    label: 'Hey Mor - Ozuna, Feid',
    data: [40, 90, 59, 0, 91, 29],
    fill: true,
    backgroundColor: 'rgb(46,139,87,0.2)',
    borderColor: 'rgb(46,139,87)',
    pointBackgroundColor: 'rgb(46,139,87)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(46,139,87)'
  }],
};

const configEsp = {
  type: 'radar',
  data: dataEsp,
  options: {
    plugins: {
      legend: {
        labels: {
          color: 'white',
          font: {
            family: 'Figtree, sans-serif',
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
          color: 'white'
        },
        pointLabels: {
          color: 'white',
          font: {
            family: 'Figtree, sans-serif',
            size: 14,
          }
        },
        ticks: {
          color: 'black',
          font: {
            family: 'Figtree, sans-serif',

          }
        },
      }
    }
  }
};
const radarChartEsp = new Chart(document.getElementById('Esp'), configEsp);
