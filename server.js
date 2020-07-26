const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname+'/dist/Front'));
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/dist/Front/index.html'));
});
app.listen(process.env.PORT || 8080);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('front-p/build'));
}

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'front-p/build', 'index.html'));
});
