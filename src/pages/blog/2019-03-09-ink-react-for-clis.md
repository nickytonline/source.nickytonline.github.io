---
templateKey: blog-post
title: 'Ink: React for CLIs'
date: 2019-03-09T21:34:54.392Z
description: 'Ink: React for CLIs'
tags:
  - cli
  - react
---
This one is short and sweet.

Are you familiar with React? Then you know [Ink](https://github.com/vadimdemedes/ink). I haven't tried this out yet, but basically it's a [custom React renderer](https://github.com/nitin42/Making-a-custom-React-renderer) that allows you to build beautiful CLIs.

Flexbox in a CLI? 🤯 React hooks in a CLI? YOLO my friend, YOLO.

<center>

![Holy Forking Shirt!](https://media.giphy.com/media/xT0xeGWDzEfcsd8QzC/giphy.gif)
</center>

Here's a little example straight from the repository's ReadME:

```javascript
import React, {Component} from 'react';
import {render, Color} from 'ink';

class Counter extends Component {
	constructor() {
		super();

		this.state = {
			i: 0
		};
	}

	render() {
		return (
			<Color green>
				{this.state.i} tests passed
			</Color>
		);
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.setState({
				i: this.state.i + 1
			});
		}, 100);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}
}

render(<Counter/>);
```

And here's author of Gatsby working on a build flow using Ink.

https://twitter.com/kylemathews/status/1104163517945397249


The jest example is also very cool.

<iframe frameborder="0" width="100%" height="500px" src="https://repl.it/@vadimdemedes/ink-jest-demo?lite=true"></iframe>

Vadim, the author of Ink, has a great intro post to it, [Building rich command-line interfaces with Ink and React](https://vadimdemedes.com/posts/building-rich-command-line-interfaces-with-ink-and-react).

Even the folks at npm think it's kinda cool.

https://twitter.com/maybekatz/status/1103347697107361792

So what are you going to build with Ink? 😉

Happy coding!
