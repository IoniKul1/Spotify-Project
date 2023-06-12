const dataCL = {
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
    label: 'Lo-Fi Beats',
    data: [11.375000000000002, 57.07000000000001, 18.019999999999996, 87.22000000000001, 45.6, 4.1770000000000005],
    fill: true,
    backgroundColor: 'rgb(255,182,193,0.2)',
    borderColor: 'rgb(255,182,193)',
    pointBackgroundColor: 'rgb(255,182,193)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255,182,193)'
  }],
};

const configCL = {
  type: 'radar',
  data: dataCL,
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

const radarChartCL = new Chart(document.getElementById('C-L'), configCL);
