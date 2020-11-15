const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Add your code below

app.use(express.static('files'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));

app.post('/submit', (req, res) => {
    // Add your code below
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write(`Name: ${req.body.name}
Email: ${req.body.email}
Message: ${req.body.message ? req.body.message : "n/a"}
Newsletter: ${req.body.checkbox1 ? "yes" : "no"}`);   
    res.end();
});
    
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});