# 08 - 20 - 23
## index sigs, objects qa
- sometimes may need to represent types for dicts where values are of a strict type that are retrieved by keys
* ```js
    const phones = {
        home: {
            'country':'+1',
            'area':'211',
            'number':'632-4515'
        },
        work: ..,
        fax: ...
    }
    ```
- we are required to use index signature
*   ```ts
        const phones: {
            [k: string]:{
                country: sstring
                area: string
                number: string
            } | undefined
        } = {}
        phones.fax

    // ts discourages adding properties that are unknown to instantiated object class
    ```
