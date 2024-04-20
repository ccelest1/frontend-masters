
```ts
interface Fruit {

interface Fruit
  name: string
  mass: number
  color: string
}

const banana: Fruit = {

const banana: Fruit
  name: "banana",
  color: "yellow",
  mass: 183,
}

function Fruit(kind: string) {
  switch (kind) {
    case "banana": return banana
    default: throw new Error(`fruit type ${kind} not supported`)
  }
}

//namespace
namespace Fruit {
    function createBanana(): Fruit{
        return Fruit('banana')
    }
}

//identifiers
const is_a_value = 4
type is_a_type = {}
namespace is_a_namespace {
  const foo = 17
}
/*
first tests for value
second is a type
third is a namespace - hover over it
*/
const x  = is_a_value
const y: is_a_type = {}
is_a_namespace

// Fruit here is both an interface, function - definition of declaration merging
export { banana, Fruit }
```
- Namespaces can be used in function definitions and simultaneously invoke directly and use various functions
```ts
function $(selector: string): NodeListOf<Element> {
  return document.querySelectorAll(selector)
}
namespace $ {
  export function ajax(arg: {
    url: string
    data: any
    success: (response: any) => void
  }): Promise<any> {
    return Promise.resolve()
  }
}
```

## MODERN DECLARATION MERGING
```ts
/*
enjoying the benefits of declaration merging when using classes
interface for class instance stacked on value declaration representing class itself
*/
class Fruit {
  name?: string
  mass?: number
  color?: string
  static createBanana(): Fruit {
    return { name: "banana", color: "yellow", mass: 183 }
    // can use Object.freeze({ name: "banana", color: "yellow", mass: 183 }) <- makes line readonly
  }
}

const fruitTest = Fruit // Fruit is a value
fruitTest.createBanana()
let typeTest = Fruit = {} as any // Fruit is a type, tell if type at all
typeTest.color
```
