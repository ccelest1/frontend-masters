## Rendering
- next js has static, dynamic rendering:
    * static routes are comps that render ahead of time at build time on deployment (landing page, blog post)
    * dynamic route has param, userid like user feed -> make api call to get new data everytime user goes to url
- have to give next js hints like fetch, probably doing something dynamic -> interfere with cache via invalidation
    * cookies(), headers() -> opt into dynamic rendering

## Layouts and Templates
- layout: comps that wrap other layouts and comps -> treated just like pages, data fetching, share uis
    - children are whats considered lower in hierarchy i.e docs, dashboard
    - even route changes, layout is cached and stays same
    - nested layouts:
        * have new layout.tsx for particular dir/route
    - can't pass data through layout props due to no re-rendering, what can't be serialized
- for each page to have indv layout, then we need to remove root layout and have `layout.tsx` for each directory for `page.tsx`
    - route grouping: all routes into same layout and no change for url
    - for routes with parens need to know what each other folders know
- templates
    * good for animations (routes), kick off use effect
## Nav
- changes made in layout.tsx in root where we have links pertaining to each directory and then we are using a rootlayout in order to map over each dir and its page.tsx
    * can have nav change depending on page if one uses client component where a hook listens for route changes and changes depending on event
    * prefer to use link from next/link

## Styling Overview
- css for app contained in globals.css in root
- react uses webpack -> node tool that builds code for self using modules `import './globals.css'`

## CSS Modules (styles you dont want to be global)
- like js modules that are encapsulated
    * can use `styles.module.css` in a given dir in order to enable desired styles using `.{property}` i.e `className={styles.property}
    * to use multiple style classes, use interpolation via `${1st class} ${2nd class}`

## CSS in JS
- can use a styled comp like convention [link](https://scottmoss.notion.site/Styling-39a9f03a734745859f1e89cfb6cedaf6)
    * themeUI

- testing
    * JEST, VITEST
    - can put a test folder, separated by functionality
    - or test folder in each dir?
