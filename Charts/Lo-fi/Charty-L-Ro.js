const dataLRo = {
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

const configLRo = {
  type: 'radar',
  data: dataLRo,
  options: {
    plugins: {
      legend: {
        labels: {
          color: 'black',
          font: {
            family: 'Domine, serif',
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
          color: 'black'
        },
        pointLabels: {
          color: 'black',
          font: {
            family: 'Domine, serif',
            size: 14,
          }
        },
        ticks: {
          color: 'black',
          font: {
            family: 'Domine, serif',

          }
        },
      }
    }
  }
};
const radarChartLRo = new Chart(document.getElementById('L-Ro'), configLRo);
