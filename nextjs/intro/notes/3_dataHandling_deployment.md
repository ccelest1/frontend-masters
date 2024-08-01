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
- imported db into `todos/page.tsx` -> using that in order to integrate server actions, utilized a .findMany using db and todo schema

## Form Handling w/ Server Actions
- server actions running code on server -> call fxn that executes code on server and trigger w/o js
    * server actions vs api routes
        - (server action) fetch data from server or client comp
        - (api route) fetch from third party or external app
    - Recommended to use SAs on forms that trigger non mutations on server

- created SA in `actions.ts` in utils -> w/ 'use server' directive
    * can't respond back as of yet
    * great for side effects where user doesn't have to wait for updates to ui/state
    * req client side code, fetch for automatic updates
- can use revalidation in order for page to get refreshed, expire cache

### Form Validation
- If FV is req, then we need to create a client component
- In order to perform redirect on form submission

## Loading + Error
* react suspense - stream data from comp and show loading comp while waiting for data
    * fallback by default based on load, error state
- can add `loading.tsx` and `error.tsx` in order to have ui display some information to user depending on condition
* QA
    - rec: auth checks via middleware
    ```ts
    // PERFORM redirect following form submission
    import { Redirect } from 'next'
    // can look at cookies via next
    import { cookies } from 'next/headers'
    ```
    - in order to avoid full re-renders of pages -> perform client side ops v SAs being for side effects + server analytics, not in ops where ui is depending on response
    - Next js routing v react routing: next js (preferred) or gatsby or react
    - One route to be a spa
        * ```TS
        'use client' (be cautious of client side rendering)
        'no ssr' (opt of server side rendering)
          ```
    - server component inside a client component and vice versa
        * [nesting server comps](https://nextjs.org/docs/app/building-your-application/rendering#nesting-server-components-inside-client-components)
            - pass server comp as prop, child prop of client component
            - __can't import server into client comp__, __import client in server__

## SA (server action) Mutations
- created an operation to perform side effect update mutation on completed param of Todo
    * (1) created a `completedToDo` op in `actions.ts` that would mark complete as true
    * (2) attached operation to onClick handler in `Todo.tsx` which is an element of the Todo comp

## API Routes
- routes via nextjs can occur on edge, serving requests from various continental/international servers based on user proximity
    * use built in stds like Request obj
    * created /api in /app with GET route -> memory -> etc.

* __CORS__: (cross origin resource sharing)
    - [cors resource](https://nextjs.org/docs/pages/building-your-application/routing/middleware#cors)

## Middleware
- [mw notes](https://scottmoss.notion.site/Middleware-baad1c5575fd4cfca8d167021e9b3922)
    * protect serverless functions, executed prior to cached content, matched routes -> direct req flow based on incoming data
    * only middleware.ts, next.config.js live on root of project
## Build for Vercel Deployment
1. ran `npm run build && npm start`
2. shows which pages are going to be dynamic/static -> circle (static)(cached version) and vice versa
3. deploy via github -> vercel (add db env var to site)
4. had to run build command of `npx run prism && npm run build`
    - sst allows for deployment of next.js with aws infrastructure

## Wrap Up
- not covered: __parallel routes, intercepting routes, optimization - images, lazy loading, caching + data fetching__
    * next.config.js options, draftMode
