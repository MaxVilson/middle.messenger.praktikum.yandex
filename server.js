const express = require('express');
const app = express();
const PORT = 3000;
const Bundler = require('parcel-bundler');
const bundler = new Bundler('src/pages/*.pug');

app.use(bundler.middleware());

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
