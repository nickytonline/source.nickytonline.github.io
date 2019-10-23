---
templateKey: blog-post
title: You do not need to use the classnames package
date: 2019-10-23T18:27:07.331Z
description: "A simple alternative to the classnames package, with no package \U0001F609"
tags:
  - javascript
  - react
---
Do not get me wrong, the [classnames](https://www.npmjs.com/package/classnames) package is really handy. It is also quite popular with just over 3.5 million downloads per week as of the date of this blog post. Most React based projects I have worked on use it.

If you are not familiar with the `classnames` package, it allows you to build a set of CSS classes based on some conditionals. Straight from there documentation:

```javascript
classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ 'foo-bar': true }); // => 'foo-bar'
classNames({ 'foo-bar': false }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'
```

Note: `true` and `false` are used to simplify the example, but normally these would be conditional variables, methods or functions.

Having said that, JavaScript has come a long way and there are features in the language that allow us to do pretty much the same thing, specifically [template strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) or as it is also called, template literals.

If you are not familiar with template strings, you can build a string with variables mixed in. Let us look at the previous examples, but this time with template strings.

```javascript
`foo bar` // => 'foo bar', not that exciting
`foo ${ true ? 'bar': '' }`; // => 'foo bar'
`${true ? 'foo-bar': '' }`; // => 'foo-bar'
`${ false ? '' : 'foo-bar'}` // => ''
`${ true? 'foo': '' }, { true ? 'bar': '' }`; // => 'foo bar'
`${ true ? 'foo' : ''} ${ true? 'bar' : '' }`; // => 'foo bar'
```

These are trivial examples, but it is just to show you that you can do pretty much the same thing with template literals. If you want to see this in action, here is an example in this site's source:

```jsx
...
<nav
   className={`navbar is-transparent ${styles.navbar}`}
   role="navigation"
   aria-label="main-navigation"
   data-cy="nav-bar"
>
...
```

https://github.com/nickytonline/www.iamdeveloper.com/blob/master/src/components/Navbar.tsx#L51

This is not mind blowing code, but just another way to do it.

Happy coding!
