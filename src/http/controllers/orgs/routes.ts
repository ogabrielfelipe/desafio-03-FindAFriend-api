import { FastifyInstance } from 'fastify'
import { register } from './register'
import { ZodTypeProvider } from 'fastify-type-provider-zod'

export async function orgsRoutes(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().route({
    method: 'POST',
    url: '/org/register',
    ...register,
  })
}
