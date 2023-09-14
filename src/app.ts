import cookie from '@fastify/cookie'
import { transationsRoutes } from './routes/transations'
import fastify from 'fastify'

export const app = fastify()

app.register(cookie)
app.register(transationsRoutes, {
  prefix: 'transactions',
})
