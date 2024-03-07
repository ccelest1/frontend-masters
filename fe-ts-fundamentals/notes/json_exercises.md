# 03.02.2024
## JSON TYPES
- JSON Value must be an object, array, number, string or one of three literal names: [ false, true, (<- boolean) null ]
    * note: isJSON(new BigInt(143)) = isJSON(BigInt(143))

```ts
type JSONPrimitive = string | number | boolean | null

type JSONObject = { [k:string]: JSONValue }
type JSONArray = JSONValue[]
type JSONValue = JSONPrimitive | JSONObject | JSONArray
```
