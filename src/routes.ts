import express, { Request, Response } from 'express'
import { candidatesController } from './controllers/candidatesController'
import { companiesController } from './controllers/companiesController'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {res.json({ hello: 'Hello, world!' })})

router.get('/candidates', candidatesController.index)
router.get('/candidates/:id', candidatesController.show)
router.post('/candidates', candidatesController.save)
router.put('/candidates/:id', candidatesController.update)
router.delete('/candidates/:id', candidatesController.delete)

router.get('/companies', companiesController.index)
router.post('/companies', companiesController.save)
router.get('/companies/:id', companiesController.show)
router.put('/companies/:id', companiesController.update)
router.delete('/companies/:id', companiesController.delete)

export { router }

