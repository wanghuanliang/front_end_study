const express = require('express');
const app = express();

app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/findByid/:id', (req, res, next) => {
    res.send({
        id: req.params.id,
        name: `张三${req.params.id}`
    })
});

app.post('/findByName', (req, res, next) => {
    const {name} = req.body;
    const dataset = [
        {
            id: 1,
            name: 'aaa'
        },
        {
            id: 2,
            name: 'bbb'
        },
        {
            id: 3,
            name: 'ccc'
        }
    ];
    const result = dataset.find((val) => val.name === name);
    res.send(result);
})

app.listen(3000, () => {
    console.log('服务器已经在3000端口运行....');
});