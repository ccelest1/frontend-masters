## Sever Comps
- can now use async keywords directly for components due to server side rendering as opposed to having to import useEffect in order to enable fetch, promises as required in vanilla React
- built in caching methods with next's [fetch](https://nextjs.org/docs/app/api-reference/functions/fetch)
    * [caching](https://nextjs.org/docs/app/building-your-application/caching)

## Client Comps
- forms have interactivity, good for client comps as it requires interactivity
- in order to use js on fe, for comps that are using js mark 'use client' in order to tell nextjs
    * client comp: just rendered on server, can use client comps in server comps -> but can't pass props inbetween
        - distinction as you can't serialize functions only data

## Prisma
- type checked ORM (sdk for db) -> prisma: sdk for several dbs, same experience regardless of db
    1. `npm i prisma --save-dev`
    2. `npm i @prisma/client@latest`
    3. use sqlite, host off a file
    4. `npx prisma init`
    5. told to delete -> `npx prisma init --datasource-provider sqlite`
- write schema in provided `schema.prisma`
    6. `npx prisma migrate dev --name init` via `npx prisma migrate --help`

- this workflow creates a .db file along with its corresponding migrations -> created Todo model in schema.prisma i.e gens a sql db on the fly

## Fetch w/ Prisma
- created a /utils that has db.ts that now has an sdk instance

## Form Handling w/ Server Actions
## Loading + Error
## API Routes
## Middleware
## Build for Vercel Deployment
