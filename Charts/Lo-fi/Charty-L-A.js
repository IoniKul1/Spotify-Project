const dataLA = {
  labels: ['Valence', 'Danceability', 'Energy', 'Instrumentalness', 'Popularity', 'Speachness'],
  datasets: [{
    label: 'Lo-Fi Beats',
    data: [11.375000000000002, 57.07000000000001, 18.019999999999996, 87.22000000000001, 45.6, 4.1770000000000005],
    fill: true,
    backgroundColor: 'rgb(255,182,193,0.2)',
    borderColor: 'rgb(255,182,193)',
    pointBackgroundColor: 'rgb(255,182,193)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255,182,193)'
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

const configLA = {
  type: 'radar',
  data: dataLA,
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

const radarChartLA = new Chart(document.getElementById('L-A'), configLA);
