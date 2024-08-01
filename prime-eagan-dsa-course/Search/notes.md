# Linear Search, Kata
- if we are looking for a specific value where we have search(arr, v), v being the target
    * iterate through array to find element and return index if it does, .indexOf() implementation

# BSA
- if data is ordered, there are certain advantages conferred
    * worst case for linear search is doing n operations making BSA better with Log(N)
    * performance either log N or n log n depending on provided params

# 2 crystal balls
```
Given 2 crystal balls that will break if dropped from high enough distance, determine exact spot in which it will break in most optimized way
```
- have to walk some portion of N, sqrt of N as 1/2 of N is still linear time and we want improved TC

# implement 2 CBs
- first walk by square root of n, check for breaks
- then walk back sqrt of n
- linearly walk at most a sqrt of N until we find a break then either i or if not found return -1
