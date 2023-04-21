import express from 'express'
import cors from 'cors'
import http from 'http'
import path from 'path'
import routes from './routes.js'

const app = express(),
  port = 3000,
  server = http.createServer(app)

app.set('view engine', 'ejs')
app.use(express.static(path.join(process.cwd(), 'public')), express.static(path.join(process.cwd(), 'views')), cors(), routes)
server.listen(port, () => console.log(`Server has connected...`))
