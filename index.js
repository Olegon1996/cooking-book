const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config({path: './config/dev.env'})
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 5050


app.use(cors())
app.use(bodyParser.json({limit: '5mb'}))

app.use('/create', require('./routes/recipe.route'))
app.use('/update', require('./routes/recipe.route'))
app.use('/delete', require('./routes/recipe.route'))
app.use('/view-all', require('./routes/recipe.route'))

const server = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    })

    app.listen(PORT, (err) => {
      if (err) console.log('error: ', err)
      console.log(`Server has been started on the ${PORT} port!`)
    })
  } catch (e) {
    console.log('error: ', e)
  }
}

server()