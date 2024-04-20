# 08 - 19 - 23
## typing functions
- preference to explicitly state return types, do you want problems at place you declare function or when a function is used
```ts
// will take you to where an error needs to be fixed, follow through with intent
// type-driven development in order to define what is needed for inputs, outputs for further implementation later
// not replace for unit tests, shift from micro to macro (has nothing to do with behavior)
function add(a: number, b:number): number {
    pass
}
// requires either throw or number returned
```

## q and a
- anys are dangerous
    * if arguments are not given a type, result type is unkown
    * passed into well typed code, anys compromises well typed code
- strict typing in jsx is missing
    * can forget to add types for one of variables
    * missing strong enforcement, not as common as ts
- use code for anys for top and bottom types

## collections
- mutable variable types
* objects
    - what properties on objects and what are property types (applied recrusively defines deeply nested objects, small objects)
    ```ts
    /**
     * print info about car to console
     * @param car - car to print
    */
    function printCar(car: {
        make: string
        model: string
        year: number
    }){
        console.log(`${car.make} ${car.model}, ${car.year}`)
    }
    ```

## optional properties
- we want a property on car model that is `chargeVoltage`
    * appears on an electric instance of a car model
    * doesn't appear on a non-electric instance of a car model
    ```ts
    function printCar( car: {
        make: string
        model: string
        year: number
        chargeV?: number
        // number | undefined, means | is `or` for types
    }){
        let str = `${car.make} ${car.model}, ${car.year}`
        car.chargeV
        // typeGuard
        // combine predicates(check with true or false), with control flow tool (if or case:) creates branches of code if undefined or defined
        if (typeof car.chargeV !== 'undefined')
            str+= `${c.chargeV}`
        // volts
        console.log(str)
    }
    ```

## excess properties
```ts
printCar({
    make: 'Tesla',
    model: 'Model 3',
    year: 2020,
    chargeV: 220,
    color: 'red'
})
// produces error, never able to properly access a property

// handling case of extra property

const myCar = {
    make: 'Tesla',
    model: 'Model 3',
    year: 2020,
    chargeV: 220,
    color: 'red'
}
myCar.color
// as it is an object defined outside constraints of printCar, can't prove color attribute is not useless
printCar(myCar)
```
