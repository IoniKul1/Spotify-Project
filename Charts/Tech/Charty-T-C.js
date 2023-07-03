const data = {
  labels: ['Valence', 'Danceability', 'Energy', 'Instrumentalness', 'Popularity', 'Speechiness'],
  datasets: [{
    label: 'Techno',
    data: [77.31, 80.02000000000001, 86.6, 78.99000000000001, 21.2, 8.23],
    fill: true,
    backgroundColor: 'rgb(148,0,211,0.2)',
    borderColor: 'rgb(148,0,211)',
    pointBackgroundColor: 'rgb(148,0,211)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(148,0,211)'
  }, { 
    label: 'Cachengue',
    data: [67.59, 70.61000000000001, 67.03999999999999, 0.004240299999999999, 63.0, 9.41],
    fill: true,
    backgroundColor: 'rgb(46,139,87,0.2)',
    borderColor: 'rgb(46,139,87)',
    pointBackgroundColor: 'rgb(46,139,87)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(46,139,87)'
  }],
  
};

const config = {
  type: 'radar',
  data,
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
const radarChart2 = new Chart(document.getElementById('T-C'), config);
