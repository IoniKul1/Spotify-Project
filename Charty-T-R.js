const dataTR = {
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
    label: 'Rap',
    data: [51.75, 70.33999999999999, 61.129999999999995, 8.8355, 73.3, 22.711000000000002],
    fill: true,
    backgroundColor: 'rgb(30,144,255,0.2)',
    borderColor: 'rgb(30,144,255)',
    pointBackgroundColor: 'rgb(30,144,255)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(30,144,255)'
  }],
};

const configTR = {
  type: 'radar',
  data: dataTR,
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
const radarChartTR = new Chart(document.getElementById('T-R'), configTR);
