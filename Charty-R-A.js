const dataRA = {
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

const configRA = {
  type: 'radar',
  data: dataRA,
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
const radarChartRA = new Chart(document.getElementById('R-A'), configRA);
