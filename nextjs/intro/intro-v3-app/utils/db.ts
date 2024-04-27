/*

   methodology - rationale behind checking specific env variable, creating client and attaching to global due to serverless environments, connection pooling

    cache connection by attaching to global => reuse the same connection
    Significant for prod dev
*/

import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient()
} else {
    if (!global.prisma) {
        global.prisma = new PrismaClient()
    }
    prisma = global.prisma
}

export default prisma
