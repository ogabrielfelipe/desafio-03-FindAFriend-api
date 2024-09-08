import fastify from 'fastify'
import swagger from '@fastify/swagger'
import scala from '@scalar/fastify-api-reference'
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { orgsRoutes } from './http/controllers/orgs/routes'

export const app = fastify()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(swagger, {
  openapi: {
    openapi: '3.0.0',
    info: {
      title: 'Find a Friend API',
      description: 'This is documentation for using the Find a Friend API',
      version: '0.0.1',
    },
    servers: [],
    tags: [
      { name: 'org', description: 'ORG related end-points' },
      { name: 'animal', description: 'Animal related end-points' },
    ],
  },
  transform: jsonSchemaTransform,
})

app.register(orgsRoutes)

app.register(scala, {
  routePrefix: '/docs',
  configuration: {
    theme: 'purple',
    spec: {
      content: () => app.swagger(),
    },
  },
})
