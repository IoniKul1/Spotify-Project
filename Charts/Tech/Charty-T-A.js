const dataTA = {
  labels: ['Valence', 'Danceability', 'Energy', 'Instrumentalness', 'Popularity', 'Speachness'],
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

const configTA = {
  type: 'radar',
  data: dataTA,
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

const radarChartTA = new Chart(document.getElementById('T-A'), configTA);
