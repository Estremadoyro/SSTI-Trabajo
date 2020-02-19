const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static(__dirname + '/view'));

app.use(express.static(__dirname + '/scripts'));

app.use(express.static(__dirname + '/styles'));


router.get('/',function(req,res){

  res.sendFile(path.join(__dirname+'/view/web.html'));
  
});

app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');