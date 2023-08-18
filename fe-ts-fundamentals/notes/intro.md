**TS (TypeScript) - open source, syntactic superset of JavaScript (starts with all javascript and layers additional concepts, maintained by microsoft)**

- complies to readable JS, there are three parts: 1. language, 2. language server, 3. compiler
- ts = fancy linter with an ever increasing popularity

add types to javascript, ts compiles out to readable javascript, language server - feeds editor like vs code that powers autocompletes, complier performs analysis on codebase and make sure everything is lined up

in terms of ubiquitous tooling, typescript is becoming an increased addition

**why devs want types? -  (1) allows as a code author to leave increased intent on the current page**

often missing from js code as in this example
```js
function add(a,b) {
	return a+b
}
// works with strings, integers

function add(a, b, c=0){
	return a+b+c
}
// with strings,
//end up with 0s at every string end

function add(a: number, b:number): number {
	return a+b
}
add(3,"4")
// would received an argument error
// 'string' is not  assignable to a parm of type 'number'
```

__(2) ← has the potential to move errors from runtime to compile time__

examples:  values that are potentially absent (null, undefined), incomplete refactoring, breakage around internal code contracts (argument becomes required)

__(3) serves as foundation for great code authoring experience__

in-editor autocomplete such as `window.setInterval`

*As JS was written in ‘95 won’t move from dynamically typed → statically typed model

Don’t expect types to become a part of what people run in browser

TS adds a ft by itself but becomes part of js like decorators, private fields, class fields

generics - defining types in terms of other types

1. Question: In design system how do i support consuming apps that do/don’t use ts, do i need to provide type definitions and prototypes?
	- Even if consumers are using regular js, still get benefits of type info that comes from library written in typescript

2. Question: Open Source TS
	- on typescript website, there are issues marked for new contributors → use lack of experience to speak to what’s/what’s not confusing
