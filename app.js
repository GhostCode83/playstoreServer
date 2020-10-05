const express = require('express');
const morgan = require('morgan');
const psApps = require('./psApps')
const cors = require('cors')

const app = express();

app.use(morgan('common'));
app.use(cors());

app.get('/apps', (req, res) => {
  const { sort = '', genres = '' } = req.query;

  let results = psApps
    .filter(psApp =>
      psApp
        .genres
        .match(/genres/g) // not sure why this doesn't work 
    )

  res.json(results)
})

// below commented out because it crashes the app
//if (sort) {
// if (![rating, app].includes(sort)) {
//   return res
//   .status(400)
//     .send('Sort mus be either rating or app')
// }
//}

/*if (sort) {
  results.sort((a, b) => {
    return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
  })
}

*/

app.listen(8000, () => {
  console.log('Server started on PORT 8000');
});