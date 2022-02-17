const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 5010;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname,'dist/oak-insights')));

app.all('*', (req,res) => {
    res.sendFile(path.join(__dirname,'dist/oak-insights/index.html'));
});

app.listen(port, () => console.log("Listening on Port " + port + "..."))