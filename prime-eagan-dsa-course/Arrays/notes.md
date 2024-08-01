# A Definition
- Contiguous memory space containing decided amount of bytes/space
- Treat x bytes as a singular character/number, 0 or more pieces of memory in row
    * `a=int[3] -> a=[3]`
    - in JS
    ```js
    const a = new ArrayBuffer(6);
    const a8 = new Uint8Array(a)
    a8[0]=45
    //print a
    a
    a8[2] = 45
    ```
    - ArrayBuffer: contiguous piece of array created in JS
    - then create views into Data Structure using Uint8Array, Unit16Array
        -  every time offset is increased, take width of type then multiply by offset then edit or get value
        - insertion: sets value (overwrites)
            * go to memory address of number + width * offset
        - deletion: same as insertion but using null to mean not nothing []
    - in regards to complexity, end and start ops are O(1) with non end/start position being O(n)
