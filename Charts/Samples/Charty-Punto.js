const dataPunto = {
  labels: ['Valence', 'Danceability', 'Energy', 'Instrumentalness', 'Popularity', 'Speechiness'],
  datasets: [{
    label: 'PUNTO G - Quevedo',
    data: [68, 75, 76, 0, 86, 15],
    fill: true,
    backgroundColor: 'rgb(30,144,255,0.2)',
    borderColor: 'rgb(30,144,255)',
    pointBackgroundColor: 'rgb(30,144,255)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(30,144,255)'
  }, { 
    label: 'Quiero Creer - Luck Ra, La T y La M, Rusherking',
    data: [93, 68, 62, 0, 79, 6],
    fill: true,
    backgroundColor: 'rgb(46,139,87,0.2)',
    borderColor: 'rgb(46,139,87)',
    pointBackgroundColor: 'rgb(46,139,87)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(46,139,87)'
  }],
};
const configPunto = {
  type: 'radar',
  data: dataPunto,
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
const radarChartPunto = new Chart(document.getElementById('Punto'), configPunto);
