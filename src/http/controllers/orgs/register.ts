import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export const register = {
  schema: {
    body: z.object({
      name: z.string().max(255),
      email: z.string().min(10).max(255),
      address: z.string().min(10).max(255),
      phone: z.string().min(10).max(15),
      password: z.string().min(6).max(16),
    }),
    tags: ['org'],
    response: {
      200: z.object({
        message: z.string().default('User registered successfully'),
      }),
    },
  },
  handler: (req: FastifyRequest, rep: FastifyReply) => {
    rep.status(200).send({
      message: 'User registered successfully',
    })
  },
}
