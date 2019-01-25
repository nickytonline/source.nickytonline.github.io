---
templateKey: blog-post
title: TypeScript Tips Part I
date: 2019-01-25T02:13:23.494Z
description: Some handy TypeScript tips.
tags:
  - typescript
  - javascript
---
We'll start off with the usual shameless plug of another blog post. If you haven't read it yet, check out my blog post, [Consider Using TypeScript](https://www.iamdeveloper.com/blog/2017-10-07-consider-using-typescript/).

We're going to look at a few tips that may/can help you on your journey in TypeScript land.

First let's start off with some things to remember if you're migrating a React application to TypeScript.

1. When porting components to TypeScript, ensure that the file extension is `.tsx`, not `.ts`. If you don't, you'll be scratching your head for hours as to why JSX is not being recognized.
1. Also, ensure that you have `"jsx"` TypeScript compiler option set properly as well. By default, it's set to `"preserve"`. You want it to be set to `"react"`. e.g. https://github.com/nickytonline/www.iamdeveloper.com/blob/master/tsconfig.json#L12

   https://twitter.com/nickytonline/status/1088614757127593985

1. Create a reusable `children` prop and add it to your component props' type via an intersection.

        ```
        // some file housing the ChildrenProp
        export type ChildrenProp = { children: React.ReactNode };
        
        // some other component file that consumes it.
        export type SomeComponentProps = ChildrenProp & {
            someOtherProp: boolean;
            ...
        };
        ```
1. Bonus points, make it generic with a default, https://github.com/nickytonline/www.iamdeveloper.com/blob/master/types/children-prop.d.ts

Alright, let's move on to outside of React Land.

1. If you're not sure what the shape of something you're building is yet, or your consuming something that for whatever reason you don't know the shape, you're going to type is as `any` until you start to figure things out. If you're using TypeScript 3.0 and up, don't. Prefer the `unknown` type.

   You get all the benefits of the `any` type, but as soon as you try to access anything on the object, you will need to do a type assertion. For more information see the documentation on the [`unknown`](https://blogs.msdn.microsoft.com/typescript/2018/07/30/announcing-typescript-3-0/#the-unknown-type) type

   https://twitter.com/nickytonline/status/1087886002063138816

1. Sometimes you have code where you know something is going to exist no matter what, so you don't want to have a check to see if it's null or undefined. TypeScript allows you via the `!` operator to basically say, "Hey TypeScript, trust me, I know what I'm doing.".

   For example, instead of doing this

   ```
   const someElementReference = document.querySelector('.awesome-selector');

   if (someElementReference) {
      someElementReference.setAttribute('data-i-checked-first', `I wasn't sure if you'd exist`);
   }
   ```

   you could do this

   ```
   const someElementReference = document.querySelector('.awesome-selector');

   someElementReference.setAttribute('data-yolo', `I know what I'm doing!`);
   ```

   Use this sparingly because, well, this giphy.

   https://media.giphy.com/media/A9grgCQ0Dm012/giphy-downsized.gif

That's all for now, until part II. I said it, so I need to write it now. 😉

