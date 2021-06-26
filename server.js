const express = require('express');
const app = express();
const dbfile = require('./model/conn')
const bodyParser = require('body-parser')
const path = require('path')



const port = process.env.PORT || 5000

const postroute = require('./router/postroute')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api/posts', postroute)

app.get('/', (req, res) => {
    res.send('posts page')
})


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });

    
}
app.listen(port, () => {
    console.log(`the server is running at ${port} port`);
})