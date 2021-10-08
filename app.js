const express = require('express');
const app = express();

const PORT  = process.env.PORT || 8877;

app.get('/produto', (req, res) => {
    res.json({
        cpu: 'AMD Ryzen 1700',
        gpu: 'Galax GTX 1070',
        mouse: 'Logitech G PRO',
        headset: 'Turtle beach PX22',
        keayboard: 'Alfawise v1',
    })
})

app.get('/sobre', (req, res) => {
    res.json({
        name: 'Assesci',
        email: 'assesci@outlook.com',
        urls: [
            {
                type: 'github',
                url: `http://github.com/assesci`
            },
        ]
    })
})

app.get('/', (req, res) => {
    res.json({
        msg: 'OK'
    })
})

app.listen(PORT, () => {
    console.log('Escutando na porta: ' + PORT);
})
