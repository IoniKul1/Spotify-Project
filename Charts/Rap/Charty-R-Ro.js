const dataRRo = {
  labels: ['Valence', 'Danceability', 'Energy', 'Instrumentalness', 'Popularity', 'Speachness'],
  datasets: [{
    label: 'Rap',
    data: [51.75, 70.33999999999999, 61.129999999999995, 8.8355, 73.3, 22.711000000000002],
    fill: true,
    backgroundColor: 'rgb(30,144,255,0.2)',
    borderColor: 'rgb(30,144,255)',
    pointBackgroundColor: 'rgb(30,144,255)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(30,144,255)'
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

const configRRo = {
  type: 'radar',
  data: dataRRo,
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

const radarChartRRo = new Chart(document.getElementById('R-Ro'), configRRo);
