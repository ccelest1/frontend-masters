# 03.06.24

## Top Types: any and unknown
Think of types in regards to set theory -> types define a set of values that a value might be (ex - `const x: boolean, const y: number`)
```ts
let a: 5 | 6 |7 // a can be anything in range
let b: null // any in { null }
let c: {
    favoriteFruit?: 'pineapple' // { 'pineapple', undefined }
}

// top types - describe any possible value allowed by system
{ x | x could be anything}

// unknown can only be used when you first apply a type guard
let myUnknown: unknown = 14
if(typeof myUnknown === 'string'){
    console.log(myUnknown, 'is a string')
} else if (typeof myUnknown === 'number') {
    console.log(myUnknown, 'is a number')
}
...
```
- Practical use of top types: Convert js to ts
    * Common to define reasonable types where it makes sense and leave in anys -> then while developing, implement correct types for conversion to full ts project
    * unknown is great for values received at runtime (data layer) -> works with discriminated unions, ambiguity with return objects

## Bottom Types: never
- Type that describes no possible value allowed by system. Mental model = 'any value from following set: { }' `never`
    * One particular case that shows its importance
        ```ts
        // Exhaustive conditionals
        class Car {
            drive(){
                ...
            }
        }
        class Truck {
            tow(){
                ...
            }
        }
        type Vehicle = Truck | Car
        let myVehicle: Vehicle = obtainRandomVehicle()
        if(myVehicle instanceof Truck){
            myVehicle.tow()
        }else if(myVehicle instanceof Car){
             myVehicle.drive()
        }else{
            // handled all potential cases
            const neverValue: never = myVehicle
        }
        ```
- recommend handling above case using an error subclass
```ts
        class Unreachable Error extends Error{
            constructor(_nvr: never, message: string){
                super(message)
            }
        }
        class Car {
            drive(){
                ...
            }
        }
        class Truck {
            tow(){
                ...
            }
        }
        type Vehicle = Truck | Car
        let myVehicle: Vehicle = obtainRandomVehicle()
        if(myVehicle instanceof Truck){
            myVehicle.tow()
        }else if(myVehicle instanceof Car){
             myVehicle.drive()
        }else{
            // handled all potential cases
            throw new UnreachableError(
                myVehicle,
                `Unexpected vehicle type: ${myVehicle}`
            )
        }
```
- In final else block,
    1. handle every case prior to reaching them, never entre final else block
    2. catch upstream code changes that req to be handled in conditional at compile time
    3. if unexpected value passes, not caught until we run code, get meaningful error message

## Type Guards and Narrowing
- More power in type guards as compared to typeof, instanceof
    *  ```ts
        ...
        else if(Array.isArray(value)){
            value
        }
        else if('dateRange' in value){
            value
        }
        ```
    ```ts
    // user defined typeguards
    interface CarLike {
        make: string
        model: string
        year: number
    }
    let maybeCar: unknown
    function isCarLike(
        valueToTest: any
    ): valueToTest is CarLike {
        return (
            valueToTest &&
            typeof valueToTest === 'object' &&
            'make' in valueToTest &&
            typeof valueToTest['make'] === 'string' &&
            'model' in valueToTest &&
            typeof valueToTest['model'] === 'string' &&
            'year' in valueToTest &&
            typeof valueToTest['year'] === 'number' &&
        )
    }
    if (isCarLike(maybeCar)){
        maybeCar
    }
    ```
    - using asserts
    ```ts

    function assertsCarLike(
        valueToTest: any
    ): asserts valueToTest is CarLike {
        if(
            !(
            valueToTest &&
            typeof valueToTest === 'object' &&
            'make' in valueToTest &&
            typeof valueToTest['make'] === 'string' &&
            'model' in valueToTest &&
            typeof valueToTest['model'] === 'string' &&
            'year' in valueToTest &&
            typeof valueToTest['year'] === 'number' &&
            )
        )
        throw new Error(
            `value does not appear to be CarLike${valueToTest}`
        )
    }
    // no need for conditional
    assertIsCarLike(maybeCar)
    maybeCar
    ```

## Nullish Values
- null, undefined, void
### null
- indicates there is a value, value is nothing. Useful to express concept of a 'nothing' result
    ```ts
    const userInfo = [
        name:'Mike',
        email: 'mike@ex.com',
        secondEmail: null //no second email
    ]
    ```
### undefined
- we haven't gotten to providing something, or won't ever provide a value
```ts
const formInProgress = {
    createdAt: new Date(),
    data: new FormData(),
    completedAt: undefined
}
function formSubmit(){
    formInProgress.completedAt = new Date()
}
```

### Non-null assertion operator
- Used to cast away possibility that value might be null/undefined -> tells ts to ignore that possibility
    * will get familiar error if value is missing
    ```ts
    // use in test suites - test frameworks, assertion libraries
    type GroceryCart = {
        fruits?: {
            name: string,
            qty: number
        }[]
        vegetables?:{
            name: string,
            qty: number
        }[]
    }
    const car: GroceryCart = {}
    cart.fruits!.push({
        name: 'kumkuat',
        qty: 1
    })

    // not preferred in app code - hard failure to hit and rather use a type guard, set and check to see if it is undefined
    ```
### Definite Assignment Operator
- DA !: operator is used to suppress Typescript's objections about class field used
    * ts has no way of knowing about async behavior so:
    ```ts
    class CompWithAsyncSetup{
        setupPromise: Promise<any>
        isSetup!: boolean // dev will assume responsibility for making sure this var receives its value -> great for component lifecycle hooks
        constructor(){
            this.setupPromise = new Promise((resolve)=>{
                this.isSetup = false
                return this.doSetup()
            }).then(()=>{
                this.isSetup = true
            })
        }
    }
    private async doSetup(){
        // async behavior
    }
    ```
