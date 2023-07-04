const dataSlim = {
  labels: ['Valence', 'Danceability', 'Energy', 'Instrumentalness', 'Popularity', 'Speechiness'],
  datasets: [{
    label: 'Elección: The Real Slim Shady - Eminem',
    data: [76, 95, 66, 0, 90, 6],
    fill: true,
    backgroundColor: 'rgb(0, 191, 255, 0.2)',
    borderColor: 'rgb(0, 191, 255)',
    pointBackgroundColor: 'rgb(0, 191, 255)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(0, 191, 255))'
  }, { 
    label: 'Recomendación: It Was A Good Day - Ice Cube',
    data: [79, 80, 74, 0, 85, 14],
    fill: true,
    backgroundColor: 'rgb(30, 215, 96, 0.2)',
    borderColor: '#1DB954',
    pointBackgroundColor: '#1DB954',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: '#1DB954'
  }],
};
const configSlim = {
  type: 'radar',
  data: dataSlim,
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
const radarChartSlim = new Chart(document.getElementById('Slim'), configSlim);
