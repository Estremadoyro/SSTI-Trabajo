const express = require('express');
const app = express();
const path = require('path');

var PORT = process.env.PORT || 3000 ; 

app.use(express.static(__dirname + '/view'));

app.use(express.static(__dirname + '/scripts'));

app.use(express.static(__dirname + '/styles'));


app.get('/',function(req,res){

  res.sendFile(path.join(__dirname+'/view/web.html'));
  
});

//app.use('/', router);

app.listen(PORT, (req, res) => { 

  console.log(`Running on port:  ${PORT}!`)

})

console.log('Running at Port 3000');