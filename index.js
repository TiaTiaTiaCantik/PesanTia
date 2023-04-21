import express from 'express'
import cors from 'cors'
import http from 'http'
import path from 'path'

const app = express(),
  port = 3004,
  server = http.createServer(app)

app.set('view engine', 'ejs')
app.use(express.static(path.join(process.cwd(), 'public')), cors())
app.get('/', (req, res) => res.render('index', {titles: 'Selamat hari raya idul fitri - 1444 H'}))
server.listen(port, () => console.log(`Server has connected...`))
