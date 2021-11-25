const express = require('express');
const app = express();  //get an express object
const cors = require('cors');  //avoid that nasty CORS error
const bodyParser = require('body-parser');

const portNum = 3000;

//take care of CORS situation
app.use(cors({origin: '*'}));

//allow body parsing
app.use(express.json());

app.get('/', (req, res) => {
    console.log('\n\nON THE SERVER');
    console.log('received from client: ' + req.query.username);

    let fs = require("fs");
    let data = req.query.note;
    fs.writeFile(`${req.query.username}.txt`, data, (err) => {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
      });
    res.send(JSON.stringify({message : 'Created'}));
});

app.post('/', (req, res) => {
    console.log('\n\nON THE SERVER');
    console.log('received from client: ' + req.query.username);

    let fs = require("fs");
    fs.readFile(`${req.query.username}.txt`, "utf-8", (err, data) => {
        if (err) { console.log(err) }
        console.log(data);
        console.log('sending response to the client from / ...');
        res.send(JSON.stringify({message : data}));
    })
    
});

app.delete('/', (req, res) => {
    console.log('\n\nON THE SERVER');
    console.log('received from client: ' + req.query.username);

    let fs = require("fs");
    fs.unlink(`${req.query.username}.txt`, (err) => {
        if (err) { console.log(err) }
        console.log('sending response to the client from / ...');
        res.send(JSON.stringify({message : 'deleted'}));
    })
    
});

app.listen(portNum, () => {
    console.log(`listening on port ${portNum}`);
});