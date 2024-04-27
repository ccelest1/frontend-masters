# 04.19.24
## RSC (react server comps)
- single page app - render + data fetching takes place in browser itself (cra -> one index.html and switch out divs given a specified route via router like react router)
- ssr -> initial rendering happens on server -> then download js and client performs interactivity
- rsc -> no js associated with comps related to browser, w/o interactivity, but allows for data fetching
    * interaction occurs with client comp
- rsc vs ssr, ssr occurs on initial load -> if you go back its client v rsc which is always on server (all logic executes on server)
## Setup
- mpx allows running of global CLIs w/o having to download
- headless comps: have functionality, but no styling
- tsx file is ts version of jsx file
## Static Routing
- for routing, create folders -> subfolders -> page.js that includes code (define nested routes via folders)
- capitalize every comp

- route grouping
    * create folder with name in () ex being (dashboard) that has a folder with non paren `settings` and then have page.tsx that shares route without it affecting url
    * layout.tsx affects the page.tsx on same level
- can only have 1 page per folder as each corresponds to a particular url
- next js runs on server (as shown by process -> log nodejs in console)
    - SSR: react - create expressive uis, reactdom - translate to dom in browser
        * build react server env, that runs in node.js -> html string -> document -> browser
        * client component takes over from server (js download)
    - ssc (server side comps): logic executed on server
        * no js waiting to hydrate

## Dynamic Routing + Params
- /user_id, /blog_title
    * use route params
    * in folders, make new folder /docs/<any>
        - so docs {dir} -> [any] (dir) so can now do localhost.../docs/<any>
    * can have multiple params
        - so docs (dir) -> [id] (dir) -> [title] (dir) with page.tsx so can now do localhost.../docs/<id>/<title>
    * catch all route
        - can do [...id] -> every route regardless of segments after id catch
    * make it inclusive of previous so docs and any id catch all
        - can do [[...id]] (next.js ended up telling me nto do that)
    * when using params for catch all, `console.log(params)` -> outputs array of whats inputted for url

### QA
- Can make specified pages at given urls to render as static using `generateStaticParams` -> render those at build time as html
- query params: use client comp
    * server side: [searchParams](https://nextjs.org/docs/app/api-reference/file-conventions/page)
    * useSearchParams for client side
