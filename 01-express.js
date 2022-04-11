const express = require('express');
const app = express();
const port = 3000;
 
app.use(express.json());
 
    
app.get('/', (req, res) => {
    console.log(req.body);
    let bisiestos = [];
    for (let año = 2022; año < 2150; año++) {
        bisiestos = [];
        if (año % 4 == 0) {
            bisiestos.push(año);
            return bisiestos;
        }
    }
    res.send (bisiestos);
});
 
app.listen (port, () => {
    console.log(`Working port on ${port}`)
})
