# 03.05.24
## Recap
- Talked about union, intersection operators and named types [ interfaces, type aliases ]

## Functions and Function Overloads
Going to talk about defining callable types [ interfaces that describe functions ], function overloads, typing 'this', return types and best practices
- Interfaces/type aliases describe something that can be invoked, and can be constructed using new keyword

### Callable Types
- Type aliases and interfaces offer capacity to describe call signatures
```ts
interface 2NumberCalculation{
    (x: number, y:number): number
}
// is the same as
type TwoNumberCalc = (x:number, y:number) => number

// great for callbacks
const add: 2NumberCalculation = (a,b) => a+b
const subtract: TwoNumberCalc = (x,y) => x-y

// sometimes functions don't return values
function invokeInFiveSeconds(callback:()=> void){
    setTimeout(callback, 5000)
}
invokeinFiveSeconds(()=> values.push(4))
// ^ ignore return value
```

### Construct Signatures
- similar to call signatures, describe what should happen with `new` keyword
    - not common
```ts
interface DateConstructor{
    new(value:number): Date
}
let MyDateConstructor: DateConstructor = Date
const d = new MyDateConstructor()
```

### Function Overloads
- Want to create a function allowing one to register a 'main event listener'
    1. if passed a `form` element, we want to register a 'submit callback'
    2. if passed `iframe` element, allow registration of 'postMessage' callback
    ```ts
    type FormSubmitHandler = (data: FormData) => void
    type MessageHandler = (evt: MessageEvent) => void

    function handleMainEvent(
        element: HTMLFormElement;
        handler: FormSubmitHandler;
    )
    function handleMainEvent(
        element: HTMLIFrameElement;
        handler: MessageHandler;
    )
    function handleMainEvent(
        elem: HTMLFormElement | HTMLIframeElement, arg: any)
    ){}
    const MyFrame = document.getElementsByTagName('iframe')[0]
    const MyForm = document.getElementsByTagName('form')[0]
    handleMainEvent(myFrame, (val)=>{

    })
    handleMainEvent(myForm, (val)=>{

    })
    ```

## this Types, Best Practices
- Sometimes there is a free-standing function w/ strong opinion around 'this' at time of invocation
    * if there is a DOM event listener for a button:
        ```ts
        <button onClick = 'myClickHandler">Click Me!</button>

        // define myClickHandler
        function myClickHandler(
            this: HTMLButtonElement,
            event: Event
        ){
            this.disabled = true
        }
        myClickHandler

        const myButton=document.getElementsByTagName('button')[0]
        const boundHandler = myClickHandler.bind(myButton)
        boundHandler(new Event('click'))
        myClickHandler.call(
            myButton.call(myButton, new Event('click'))
        )
        ```

    * Async call function, data retrieval
        -
        ```ts
            async function getData(
                url: string
            ): Promise <{ properties: string[] }>{
                const resp = await fetch(url)
                if(resp.ok){
                    const data = (await resp.json()) as {
                        properties: string[]
                    }
                    return data
                }
            }
            function loadData(){
                getData('url').then((result) => {
                    console.log(result.properties.join(","))
                })
            }
        ```
## Classes, Access Mod Keywords
- Typescript adds very critical features on traditional JS -> class fields, access modifier keywords, etc.

### Class Fields
```ts
class Car{
    make: string
    model: string
    year: number
    constructor(make: string, model: string, year: number){
        this.make = make
        this.model = model
        this.year = year
    }
}
let sedan = new Car('honda', 'accord', 2018)
```
### Access Mod Keywords
#### public, private, protected
- Typescript provides 3 access mod keywords to be used with class fields, methods to describe who should see and use them
    * public (everyone), protected (instance itself, subclasses), private (only instance itself)

- Two examples of 'limited exposure':
    * Car can expose private functionality through own protected functionality
    * Sedan exposes protected functionality through def own public functionality
        - Not for secret keeping/security as it is validated at compile time, no real privacy or security benefits at runtime
```ts
class Car{
    public make: string
    public model: string
    public year: number
    protected: vinNumber = generativeVinNumber()
    private doorLockCode = generativeDoorLockCode()

    constructor(
        make: string,
        model: string,
        year: number
    ){
        this.make = make
        this.model = model
        this.year = year
    }
    // control pathways for performing certain behaviors, use doorLockCode specifically
    protected unlockAllDoors(){
        unlockCar(this, this.doorLockCode)
    }
    class Sedan extends Car{
        constructor(
            make: string,
            model: string,
            year: number
        ){
            super(make, model, year)
            this.vinNumber
            // private, only accessed in class 'Car'
            this.doorLockCode
        }
    }
}
let s = ...
s.make

// protected, only accessed in 'Car' class and its subclasses
s.vinNumber
```

### readonly
- Restricts the ability to reassign on designated parameters
