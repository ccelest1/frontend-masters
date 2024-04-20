# 08 - 19 -23
## vars + values
- in js can just do, `let age = 6` and ts can figure out its an integer via inference as a result of contextual understanding
    * but can't do
    ```js
    let age = 6
    age = 'not a number'
    // results in an error `type string is not assignable to type number`
    ```
    * in ts vars are born with types

    ```js
    const age = 6
    // literal type, any number that is 6
    // age always points to what it is assigned to
    // ts is able to make a specific assumption regarding variables as seen above
    ```
    - in previous coding block,
        * 6 is called a literal type, set of allowed values

    - sometimes we need to declare a variable's type prior to initialization
        ```js
        const RANDOM_WAIT_=
            Math.round(Math.random() * 500) + 500
        let start = new Date()
        /*
        let end // (type of any), no constraints regarding type
        */
        let end: Date  // end is type date (type annotation), provides enforcement of type
        setTimeout(()=>{
            end = 0
            end = new Date()
        }, RANDOM_WAIT)
        ```
        ```js
        // if anys are provided as input, it will break well typed code
        // weakens guarantees as it regular JS
        const result = add(3, "4")
        const P = new Promise(result)
        ```
