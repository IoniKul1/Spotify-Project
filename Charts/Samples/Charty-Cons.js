const dataCons = {
  labels: ['Valence', 'Danceability', 'Energy', 'Instrumentalness', 'Popularity', 'Speechiness'],
  datasets: [{
    label: 'Consciousness - Anyma, Chris Avantgarde',
    data: [10, 60, 84, 81, 68, 5],
    fill: true,
    backgroundColor: 'rgb(30,144,255,0.2)',
    borderColor: 'rgb(30,144,255)',
    pointBackgroundColor: 'rgb(30,144,255)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(30,144,255)'
  }, { 
    label: 'In The Wild - Dee Montero, Meliha',
    data: [51, 58, 79, 77, 39,3],
    fill: true,
    backgroundColor: 'rgb(46,139,87,0.2)',
    borderColor: 'rgb(46,139,87)',
    pointBackgroundColor: 'rgb(46,139,87)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(46,139,87)'
  }],
};

const configCons = {
  type: 'radar',
  data: dataCons,
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
const radarChartCons = new Chart(document.getElementById('Cons'), configCons);
