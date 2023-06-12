const dataCA = {
  labels: ['Valence', 'Danceability', 'Energy', 'Instrumentalness', 'Popularity', 'Speachness'],
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

const configCA = {
  type: 'radar',
  data: dataCA,
  options: {
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
  }
};

const radarChartCA = new Chart(document.getElementById('C-A'), configCA);
