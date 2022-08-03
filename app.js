const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

let active = {}

app.get('/', (req, res) => {
    keyword = '首頁'
    active = {homepage: true}
    res.render('index', {keyword, active})
})

app.get('/about', (req, res) => {
    const keyword = 'About'
    active = {about: true}
    res.render('index', {keyword, active})
})

app.get('/portfolio', (req, res) => {
    const keyword = 'Portfolio'
    active = {portfolio: true}
    res.render('index', {keyword, active})
})

app.get('/contact', (req, res) => {
    const keyword = 'Contact'
    active = {contact: true}
    res.render('index', {keyword, active})
})

app.listen(port, () => {
    console.log(`localhost:${port} is running.`)
})