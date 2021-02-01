const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateWindbag = require('./windbag')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

const data = [
  {
    'career': 'engineer',
    'title': '工程師',
    'avatar': 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5668/angry-developer.jpg'
  },
  {
    'career': 'designer',
    'title': '設計師',
    'avatar': 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5667/angry-designer.jpg'
  },
  {
    'career': 'entrepreneur',
    'title': '創業家',
    'avatar': 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5669/angry-founder.jpg'
  }
]

app.get('/', (req, res) => {
  res.render('index', { data, port })
})

app.post('/', (req, res) => {
  const selectedItem = req.body.career
  const selectedArray = data.find(item => {
    return item.career === selectedItem
  })
  const windbag = generateWindbag(selectedArray)

  res.render('index', { data, windbag, port })
})

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})