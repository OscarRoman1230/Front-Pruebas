const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname+'/dist/front-pruebas'));
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/dist/front-pruebas/index.html'));
});
app.listen(process.env.PORT || 8080);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('front/build'));
}

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'front/build', 'index.html'));
});
