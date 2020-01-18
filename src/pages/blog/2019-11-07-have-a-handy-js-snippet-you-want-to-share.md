---
templateKey: blog-post
title: 'Have a Handy JS Snippet You Want to Share? '
devto_link: 'https://dev.to/nickytonline/handy-js-snippets-352f'
date: 2018-01-23T16:29:30.310Z
description: Looking for handy JS snippets
tags:
    - javascript
---

So it's pretty simple. I'm looking for **one or two lines of JavaScript** that do something useful.

I'll get the ball rolling and start with some examples:

-   Shallow array clone via Array spread.

```javascript
const originalArray = [1, 2, 3];
const shallowArrayClone = [...originalArray];
```

-   Shallow array clone via `Array.protoype.slice`.

```javascript
const originalArray = [1, 2, 3];
const shallowArrayClone = originalArray.slice();
```

https://twitter.com/nickytonline/status/908547800442404864

-   Shallow clone of an object via object spread.

```javascript
const originalObject = { a: 1, b: 2, c: 3 };
const shallowObjectClone = { ...originalObject };
```

-   Shallow clone of an object via object spread with one property overridden.

```javascript
const originalObject = { a: 1, b: 2, c: 3 };
const shallowObjectClone = { ...originalObject, c: 45 };
```

-   Get unique values of an array using `Set`

```javascript
const arrayWithDuplicateValues = [1, 2, 3, 3, 1, 5];
const uniqueArray = Array.from(new Set(arrayWithDuplicateValues);
```

or

```javascript
const arrayWithDuplicateValues = [1, 2, 3, 3, 1, 5];
const uniqueArray = [...new Set(arrayWithDuplicateValues)];
```

-   See if two arrays have the same values (unordered and for primitive values).

```javascript
const a = [1, 2, 3];
const b = [2, 3, 4];

const uniques = new Set(a.concat(b));
const haveSameValues = uniques.length === a.length; // or uniques.length === b.length;
```

-   Flatten an array with the ES spread operator and Array.prototype.concat. Great tip care of Jonathan Z. White.

https://twitter.com/jonathanzwhite/status/985726458466263042

```javascript
const arrayToFlatten = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
const flattenedArray = [].concat(...arrayToFlatten);
```

2020 Update for the above is

```javascript
[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
].flatMap(x => x);
```

And go!
