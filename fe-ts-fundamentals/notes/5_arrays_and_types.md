# 03.01.2024

## Array Types
- For simple type arrays, just include brackets via inference or provide
```ts
const cars = {
    {
        make: string;
        model: string;
        year: number;
    }[]
}
```
- Tuples: can provide a convention for proper representation of instantiated object:
    * need to properly assert tuple over regular array
    -
    ```ts
    let myCar: [number, string, string] = [
        200,
        'Toyota',
        'Corolla'
    ]

    const numPair: readonly [number, number] = [4, 5]

   // readonly class properties
    class Employee {
    readonly empCode: number;
    empName: string;

    constructor(code: number, name: string)     {
        this.empCode = code;
        this.empName = name;
        }
    }
    let emp = new Employee(10, "John");
    emp.empCode = 20; //Compiler Error
    emp.empName = 'Bill';

   // readonly type

    interface IEmployee {
        empCode: number;
        empName: string;
    }

    let emp1: Readonly<IEmployee> = {
        empCode:1,
        empName:"Steve"
    }

    emp1.empCode = 100; // Compiler Error: Cannot change readonly 'empCode'
    emp1.empName = 'Bill'; // Compiler Error: Cannot change readonly 'empName'

    let emp2: IEmployee = {
        empCode:1,
        empName:"Steve"
    }

    emp2.empCode = 100; // OK
    emp2.empName = 'Bill'; // OK
    ```

# 03.02.24
## Structural v Nominal Types
- Type Checking: task that attempts to eval question of compatibility or type equivalence
    ```ts
    function foo(x){
        // code
    }
    /*
    type checking: is 'myValue' type equivalent to what foo intends to receive
    */
    foo(myValue)

    // is the value y holds allowed by x
    x=y

    // return type
    const myStrings = [ 'a' ]
    function bar(): string[]{
        // is myStrings type = to what 'bar' states it will return
        return myStrings
    }
    ```
- static vs dynamic type checking
    * depends on whether type-checking is performed at compile time or runtime
        - TS's type system = static (inference can occur in static type systems)

- nominal v structural
    * nominal type systems are about names (class names)
    * structural type systems are all about structure/shape
    ```ts
    class Car {
        make: string,
        model: string,
        year: number,
        isE: boolean
    }
    class Truck {
        make: string,
        model: string,
        year: number,
        towingCapacity:number
    }
    function printCar(car:{
        make:string
        model:string
        year:number
    }){
        console.log(`${car.make},${car.model},${car.year}`)
    }
    printCar(new Car())
    print(new Truck())
    ```
    - duck typing: dynamic type systems

- strong v weak types
    * static types, present in code vs weak which is dynamic
## Union Types
- logical boolean operators (and, or)
* imagine two sets: union type (or for types) -> either of two circles
* intersection: (and for types) only elements/qualities both have
```ts
function flipCoin(): 'heads'|'tails'{
    if (Math.random()>0.5) return 'heads'
    return 'tails'
}
const outcome = flipCoin()

function GetUserInfo():
    | ['error', Error]
    | ['success', {
        name: string;
        email:string
    }]
    if(flipCoin()==='heads'){
        return [
            'success',
            {
                name: 'Mike North',
                email:'mike@example.com'
            }
        ] else {
            return[
                'error',
                new Error("The coin landed on TAILS")
            ]
        }
    }

const outcome = GetUserInfo()
// when value has type that includes union, only able to use common behavior that is ensured to be there
```
- Narrowing w/ type guards
    * Required to separate two potential possibilities for value -> can perform this with type guards
        - user defined type guards: expressions when used with control flow statement allow for specific type for particular value
        * connection between type-checking and code runtime execution

        ```ts
        // extreme leveling of narrowing
        function printCar(car:{
            make:string
            model:string
            year:number
            chargeVoltage?:number
        }){
            let str = `${car.make},${car.model},${car.year}`
            car.chargeVoltage
            if(typeof car.chargeVoltage !== 'undefined') str+= ${car.chargeVoltage}
            console.log(str)
        }

        function GetUserInfo():
            | ['error', Error]
            | ['success', {
                name: string;
                email:string
            }]
            if(flipCoin()==='heads'){
                return [
                    'success',
                    {
                        name: 'Mike North',
                        email:'mike@example.com'
                    }
                ] else {
                    return[
                        'error',
                        new Error("The coin landed on TAILS")
                    ]
                }
            }

        const outcome = GetUserInfo()
        const [first, second] = outcome
        if( second instanceof Error){
            second //Error
        }else{
            second // user info
        }

        // discriminated/'tagged' unions - typeguard handles number of cases
        if ( outcome[0] === 'error'){
            outcome // error tuple
        }else{
            outcome // user tuple
        }
        ```
## Intersection Types
- described by using the & operator (ex: if we had a `Promise` with `startTime` and `endTime` properties)
```ts
// think about what values are makeWeek allowed to hold -> intersection
function makeWeek(): Date & { end: Date }{
    const start = new Date()
    const end = new Date(start.valueOf() + ONE_WEEK)
    return { ...start, end } // add additional properties to original object
}
const thisWeek = makeWeek()
thisWeek.toISOString()
```
- typically union types are see more often as compared to intersection
    * Consider: Control Flow, Function Return Types as code branches often

## Type Aliases
- allow devs to:
    1. define meaningful name for type
        - name of entity describes purpose
    2. declare particulars of type in single place
    3. import + export type from modules, same as if it were an exported value
        - define it once and refer from single place

    ```ts
    // @filename: types.ts
    export type = UserContactInfo = {
        name: string
        email: string
    }

    // @filename: utilities.ts
    import { UserContactInfo } from './types'
    function printContextInfo(info:UserContactInfo){
        console.log(info)
        console.log(info.email)
    }

    // clean up getUserInfo via flipped coin example
    // @filename: with-ailiases.ts
    type UserInfoOutcomeError = ['error', Error]
    type UserInfoOutcomeSuccess = [
        ['success', {
                name: string;
                email:string
            }]
    ]
    type UserInfoOutcome =
        | UserInfoOutcomeError
        | UserInfoOutcomeSuccess

    // @filename: flipCoin-getUserInfo.ts
    import { UserInfoOutcome } from './with-ailiases'
    export function MaybeGetUserInfo(): UserInfoOutcome {
        ...
    }
    ```
    * Inheritance
        - create type aliases combining existing types w/ new behavior by using Intersection (&) types
        ```ts
        type SpecialDate = Date & { getReason(): string }
        const NewYearsEve: SpecialDate = {
            ...new Date(),
            getReason:() => 'last day of year',
        }
        NewYearsEve.getReason
        ```

## Interfaces
- method of defining object type, 'object type' = 'instance of class can look like this'
    * ex: string | number = not object type as it uses union type operator
        * more limited vs aliases
    * can be imported/exported between modules like values, provide 'name' for specific type

    ```ts
    interface UserInfo{
        name: string
        email: string
    }
    function printUserInfo(info: UserInfo){
        info.name
    }
    ```

    ### Inheritance (extends)
    * heritage clause: extends (describe ancestry in oop hierarchy)
        * extends used to describe inheritance between like things
        * implements used to describe inheritance between unlike things
            - gives one the ability to validate, at compile time, that instances of class conform to 1 or + contracts (types)

        ```ts
        class Animal {
            class(food){
                consumeFood(food)
            }
        }
        class Dog extends Animal{
            bark(){
                return 'woof'
            }
        }
        const d = new Dog()
        d.eat
        d.bark
        ```

        ```ts
        interface AnimalLik{
            eat(food):void
        }
        class Dog implements AnimalLik{
            bark(){
                return 'woof
            }
            eat(food){
                consumerFood(food)
            }
        }
        ```
        - Both extends and implements can be used in conjunction
            * only use implements with interfaces
        ```ts
        class LivingOrg{
            isAlive(){
                return true
            }
        }
        interface AnimalLike{
            eat(food): void
        }
        interface CanBark{
            bark(): string
        }
        class Dog
            extends LivingOrg
            implements AnimalLike, CanBark
        {
            bark(){
                return 'woof
            }
        }
        ```
        ### Open Interfaces
        * as opposed to type aliases, can have several declarations in same scope
        ```ts
        interface AnimalLike{
            isAlive(){
                return true
            }
        }
        function feed(animal:AnimalLike){
            animal.eat
            animal.isAlive
        }
        // second declaration
        interface AnimalLike{
            // add eat method
            // holistic across app with AnimalLike
            eat(food):void
        }
        ```

        ### Choosing which to use
        - In several situations, choosing between type alias or interface:
            1. define something other than object type ( use | `union type operator`), use type alias
            2. define type to use with implements heritage term, use an interface
            3. allow consumers of types to augment -> use an interface

    ### Recursion
    - recursive types: self-referential, used to describe infinitely nestable types
        * infinite nestable array of #s [3,4,[5,6, [7], 59],22]
    ```ts
    type NestedNumbers = number | NestedNumbers[]
    const val: NestedNumbers = [3,4,[5,6, [7], 59],22]
    if(typeof val!=='number'){
        val.push(41)
    }
    ```
