import { type Request, type Response, Router } from 'express'

const router = Router()

// Products
router.get('/products', (req: Request, res: Response) => {
  res.json({ message: 'products' })
})
// router.get('/product/:id', () => {})
// router.put('/product/:id', () => {})
// router.post('/product', () => {})
// router.delete('/product/:id', () => {})

// Updates
// router.get('/updates', () => {})
// router.get('/update/:id', () => {})
// router.put('/update/:id', () => {})
// router.post('/update', () => {})
// router.delete('/update/:id', () => {})

// UpdatesPoints
// router.get('/points', () => {})
// router.get('/point/:id', () => {})
// router.put('/point/:id', () => {})
// router.post('/point', () => {})
// router.delete('/point/:id', () => {})

export default router
