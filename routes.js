import { Router } from 'express'

const route = Router()
route.get('/', (req, res) => res.render('views/index'))


export default route
