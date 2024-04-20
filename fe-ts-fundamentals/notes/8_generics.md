# 03.07.24

## Generics
- allows one to parameterize types, allows for reuse of types, code across ts project
- Motivating Use Case:
    ```ts
    const phoneList = [
        { customerId: '0001', areaCode:'321', num: '123-4566'},
        ...
    ]
    // we want to convert this array of phone objects to
    const phoneDict = {
        '0001':{
            customerId:'0001',
            areaCode:'321',
            num: '123-4566'.
        },
        ...
    }
    ```
- Require a mechanism to product a key for each object encountered in PhoneList
```ts
    // function signature
    interface PhoneInfo{
        customerId: string
        areaCode: string
        num: string
    }
    function listToDict(
        /* if wanting to generalize

        list: any[],
        idGen: (arg: any) => string
        ): { [k: string]: any }{

        */

        // pertaining to specific example
        list: PhoneInfo[], // take list as an argument
        idGen: (arg: PhoneInfo) => string // callback to get Ids
    ): { [k: string]: PhoneInfo } {
        const dict: { [k: string]: PhoneInfo } = {}
        list.forEach((element)=>{
            const dictKey = idGen(element)
            dict[dictKey]= element
        })
        return dict
    }
    console.log(
        listToDict(phoneList, (item) => item.customerId)
    )

    /*
        const dict = listToDict(
            [(name:'Mike'), {name:'Mark'}],
            (item) => item.name
        )
    */

   // the generic implementation turns every item in dict to an 'any' meaning we lost all helpful type information -> we req a mechanism of defining relationship between input and return value
   // ^ USE CASE FOR GENERICS
```

### GENERICS USE CASE
- need to define type parameter = fxn args for types, generics change type depending on type parameters used in conjunction
    - Function signature will now include type parameter `T`
    - new function signature, T = Type parameter list (change on per usage basis), list: T[] as first argument means we are accepting a list of T's (inference of T based on type)
    ```ts
    function listToDict<T>(
        list: T[]
        idGen: (arg:T) => string
    ):{ [k:string]: T}{
        const dict: { [k: string]: T} = {}
        return dict
    }

    // simpler example
    function wrapinArray<T>(arg: T): [T]{
        return [arg]
    }
    ```
    - __Able to get benefits of type-checking in idGen fxn + gain type-checking alignment btwn array and idGen function__

## Dictionary map, filter, and reduce (EXERCISE)
```ts
// use to perform transformation
function mapDict <T, U> (
    input: Dict<T>
    mapCb: (arg: T) => U
): Dict<U> {
    const toReturn: Dict<U> = {}
    for(let key in input){ // each
        const thisVal = input[key] // get value
        toReturn[key] = mappingCb(thisVal, key) // transform
    }
    return toReturn
}

// subset dict returned of original dict with desired term filtered out
function filterDict <T> (
    input: Dict<T>,
    filterCb: (arg:T)=> boolean): Dict<T>{
        const toReturn: Dict<T> = {}
        for(let key in input){
            const thisVal = input[key]
            if(filterCb(thisVal)){
                toReturn[key]=thisVal;
            }
        }
        return toReturn
    }

// return singular value given a dict, list from performed operation
function reduceDict <T, V>(
    input: Dict<T>,
    reducer: (currentValue: V, item: T) => V,
    initialVal: V
): V {
    let valToReturn = initialVal
    for(let key in input){
        const thisVal = input[key];
        valToReturn = reducer(valToReturn, thisVal)
    }
}
```
## Generics Scopes and Constraints
- Scopes and Constraints - where type params can be used, minimum requirements in order for them to be consumed in function
    * ```ts
        interface HasId {
            id: string
        }
        interface Dict<T>{
            [k:string]: T
        }

        function listToDict<T extends HasId>(list: T[]): Dict<T>{
            const dict: Dict<T> = {}
            list.forEach((item)=>{
                dict[item.id] = item
            })
            return dict
        }
    ```
    * scopes, can see type parameters from inside out as in code that is block scoped by function can see input parameters, but outside defined function, parameters inside function are unreachable
-  ```ts
    function  tupleCreator <T> (first: T){ // only can see T
        return function finish <S>(last:S): [T,S]{ // can see both T, S
            return [first, last]
        }
    }
    ```

### Best Practices: Generics
- Point of type parms, generics is to relate multiple entities
- Use each type parameter at least twice -> any less, you may cast with as keyword
- define type params simply and want to avoid complexity if possible
