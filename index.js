const express = require('express');
const app = express();
const courseInfo = require('./data/CourseInfo.json');
const courseDetails = require('./data/CourseDetails.json');
const port = 5004;
const cors = require('cors');

/* 

vercel-server-deploy 

https://b610-lerning-platform-server-side-one.vercel.app/CourseDetails
https://b610-lerning-platform-server-side-one.vercel.app/CourseInfo

*/

app.use(cors());

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

app.get('/CourseDetails', (req, res) => {

    res.send(courseDetails);
})

app.get('/CourseDetails/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const courseDetail = courseDetails.find((v) => v.id === id);
    res.send(courseDetail);

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})