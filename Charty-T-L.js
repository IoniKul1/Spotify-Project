const dataTL = {
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

const configTL = {
  type: 'radar',
  data: dataTL,
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
const radarChartTL = new Chart(document.getElementById('T-L'), configTL);
