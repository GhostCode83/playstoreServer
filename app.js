const express = require('express');
const morgan = require('morgan');
const psApps = require('./psApps');
const cors = require('cors');

const app = express();

app.use(morgan('common'));
app.use(cors());

app.get('/apps', (req, res) => {
  const { sort = '', genres = '' } = req.query;

  let results = psApps
    .filter(App =>
      App
        .Genres
        .toLowerCase()
        .includes(genres)
    )

  if (sort === 'Rating' || sort === 'App') {
    results = sortArray(sort, results)
  }

  res.json(results);
});

function sortArray(key, results) {
  for (let i = 0; i < results.length - 1; i++) {
    for (let j = i + 1; j < results.length; j++) {
      if (results[i][key] < results[j][key]) {
        let aux = results[i];
        results[i] = results[j];
        results[j] = aux;
      }
    }
  }
  return results
}

module.exports = app;







