const express = require("express");
const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.write("<h1>Welcome to the home page</h1>");
    res.write("<h1>This is the first App in Express js</h1>");
    res.send();
});

app.get('/about', (req, res) => {
    res.status(200).res.send('About Us')
});

app.get('/contact', (req, res) => {
    res.status(200).res.send('Contact Us')
});

app.get('/temp', (req, res) => {
    res.send(
        [
            {
                id: 1,
                name: "warda",
            },
            {
                id: 2,
                name: "fatima",
            },
            {
                id: 3,
                name: "asma",
            },
        ])
});


app.get('/temp', (req, res) => {
    res.send(
        [
            {
                id: 1,
                name: "warda",
            },
            {
                id: 2,
                name: "fatima",
            },
            {
                id: 3,
                name: "asma",
            },
        ])
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})