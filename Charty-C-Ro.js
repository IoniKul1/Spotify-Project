const dataCRo = {
  labels: ['Valence', 'Danceability', 'Energy', 'Instrumentalness', 'Popularity', 'Speechiness'],
  datasets: [{
    label: 'Cachengue',
    data: [67.59, 70.61000000000001, 67.03999999999999, 0.004240299999999999, 63.0, 9.41],
    fill: true,
    backgroundColor: 'rgb(46,139,87,0.2)',
    borderColor: 'rgb(46,139,87)',
    pointBackgroundColor: 'rgb(46,139,87)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(46,139,87)'
  }, { 
    label: 'Rock',
    data: [71.92999999999999, 60.75, 76.74000000000001, 6.248304999999999, 40.7, 7.048000000000001],
    fill: true,
    backgroundColor: 'rgb(255,0,0,0.2)',
    borderColor: 'rgb(255,0,0)',
    pointBackgroundColor: 'rgb(255,0,0)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255,0,0)'
  }],
};

const configCRo = {
  type: 'radar',
  data: dataCRo,
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
const radarChartCRo = new Chart(document.getElementById('C-Ro'), configCRo);
