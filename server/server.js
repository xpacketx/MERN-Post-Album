import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))

app.use(cors())

// use routes
app.use('/api/posts', postRoutes) 

app.get('/', (req, res) => {
  res.send('Hello to MERN Post Albim API')
})

const PORT = process.env.PORT || 5000

// connect to port and db
async function start() {
  try {
    await mongoose.connect(process.env.CONNECTION_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(PORT, () => console.log(`mongodb connected & server started on port: ${PORT}`))
  } catch(error) {
      console.log('Server Error', error)
      process.exit(1)
  }
}

start()


