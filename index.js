const express = require('express');
const app = express();
const courseInfo = require('./data/CourseInfo.json');
const port = 5004;


app.get('/', (req, res) => {

    res.send('kahoot-Learning-Platform');
})

app.get('/CourseInfo', (req, res) => {

    res.send(courseInfo);

})

app.get('/CourseInfo/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const courseCategories = courseInfo.filter((v) => v.id === id);
    res.send(courseCategories);

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})