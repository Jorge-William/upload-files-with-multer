const express = require('express')
const multer = require('multer')
const app = express()
const port = 3000

app.get('/', (req,res) => {
    res.send('Hello World!')
})

const upload = multer({
    dest: 'pastas/lei/'
})

app.post('/upload', upload.single('file'), (req, res) => {
    res.send({
        message: "Uploaded successfully!"
    })
})


app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})
