# 08 - 20 - 23
## index sigs, objects qa
- sometimes may need to represent types fo dicts where values are of a strict type that are retrieved by keys
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
                country: string
                area: string
                number: string
            }
        } = {}
        phones.fax
    ```
