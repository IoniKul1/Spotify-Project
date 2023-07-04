const dataRL = {
  labels: ['Valence', 'Danceability', 'Energy', 'Instrumentalness', 'Popularity', 'Speechiness'],
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

const configRL = {
  type: 'radar',
  data: dataRL,
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

const radarChartRL = new Chart(document.getElementById('R-L'), configRL);
